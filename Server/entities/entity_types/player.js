import PhysicsEntity from './../physics_entity.js';
import { angle_diff, angle_normalize, clamp, degtorad, lengthdir, lengthdir_x, lengthdir_y, vec_dir, vec_len } from '#util/maths'
import Passenger from './passenger.js';

export const defaultInputs = {
    move: {
        x: 0,
        y: 0
    },
    kright: 0,
    kleft: 0,
    kup: 0,
    kdown: 0,

    kinteract: 0
};


export default class PlayerEntity extends PhysicsEntity {
    static type = 'Player';
    static object_name = 'oPlayer';
    
    collider_type = 'box';
    
    collision_type = 'discrete';
    precise_collisions = true;
    outside_room_action = 'wrap';
    
    stuck_action = 'stop';
    
    sendEveryTick = true;
    
    base_size = {
        x: 64,
        y: 32
    };
    
    scale = {
        x: 1,
        y: 1
    };
    
    client = null;
    
    get name() { return this.client.name; }
    prop_names = ['name', 'dir', /*'spd_dir', 'coll',*/ 'spd_val', 'destination', 'reward', 'gold', 'boarded', 'progress', 'max_progress'];

    get coll() {
        return this.collider.getAABBAsBBox();
    }
    
    inputs = Object.assign({}, defaultInputs);
    
    is_solid = true;
    
    acc = 500/2;
    fric = 200/2;
    brake_dec = 750/2;

    // max_movespd = 2250/2;
    max_movespd = 750;


    rot_spd = 90;

    dir = 0;
    spd_dir = 0;

    
    picking_up = null;
    boarded = false; // carrying a passenger
    destination = {x: 0, y: 0};
    reward = -1;

    gold = 0;

    progress = 0;
    max_progress = .75;
    
    spawned_passenger = null;
    
    constructor(room, x = 0, y = 0, client) {
        super(room, x, y);
        this.client = client;
    }
    
    create() {
        this.spawned_passenger = this.room.spawnPassenger();
        this.on('remove', () => {
            this.spawned_passenger?.die();
        });

        super.create();
    }

    addSpd(d) {
        this.spd.x += d.x;
        this.spd.y += d.y;
    }

    movement(dt) {
        let prev_dir = this.dir;
        let fwd = 1;


        this.dir += -this.inputs.move.x * this.rot_spd * dt; /* * (Math.sqrt(this.spd_val) / 20)*/;
        this.dir = angle_normalize(this.dir);

        this.angle = degtorad(360-this.dir);
        this.updateCollider();

        if (this.placeMeeting()) {
            this.dir = angle_normalize(prev_dir);
            this.angle = degtorad(360-this.dir);
            this.updateCollider();
        }

        // this.dir += -this.inputs.move.x * this.rot_spd * dt;

        // this.spd.x += lengthdir_x(-this.inputs.move.y * this.acc * dt, this.dir);
        // this.spd.y += lengthdir_y(-this.inputs.move.y * this.acc * dt, this.dir);

        this.spd_dir = vec_dir(this.spd.x, this.spd.y);
        this.spd_val = vec_len(this.spd.x, this.spd.y);

        if (angle_diff(this.spd_dir, this.dir) > 175 && this.spd_val != 0 || this.spd_val == 0 && this.inputs.move.y > 0) {
            fwd = -1;
        }

        this.spd_val -= Math.sign(this.spd_val) * Math.min(this.fric * dt, Math.abs(this.spd_val));
        this.spd_val = clamp(this.spd_val, 0, this.max_movespd);


        this.spd_val += -this.inputs.move.y * this.acc * dt * fwd;


        if (fwd == -1) {
            this.spd.x = lengthdir_x(this.spd_val, angle_normalize(180+this.dir));
            this.spd.y = lengthdir_y(this.spd_val, angle_normalize(180+this.dir));
        }
        else {
            this.spd.x = lengthdir_x(this.spd_val, this.dir);
            this.spd.y = lengthdir_y(this.spd_val, this.dir);
        }
    }

    handleDelivery(dt) {
        if (!this.boarded) return;

        this.dist_to_dest = vec_len(this.x - this.destination.x, this.y - this.destination.y);

        if (this.dist_to_dest < 64) {
            if (this.inputs.kinteract) {
                this.progress += dt;
            }
            else {
                this.progress = 0;
            }

            if (this.progress >= this.max_progress) {
                this.boarded = false;
                this.gold += this.reward;
                this.reward = -1;

                this.progress = 0;

                this.spawned_passenger = this.room.spawnPassenger();
            }

        }
        else {
            this.progress = 0;
        }
    }
    
    update(dt) {
        if (!this.room.playing) {
            this.inputs = Object.assign({}, defaultInputs);
        }

        this.movement(dt);
        this.handleDelivery(dt);

        this.client.score = this.gold;
        super.update(dt);
    }
}
