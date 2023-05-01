import Entity from "#concepts/entity";
import Room from "#concepts/room";
import PlayerEntity from "./player.js";
import { arrayRandom, degtorad, vec_dir } from '#util/maths';

export default class Passenger extends Entity {
    static type = 'Passenger';
    static object_name = 'oPassenger';

    sendEveryTick = true;

    base_size = {
        x: 14,
        y: 9
    }

    scale = {
        x: 1.75,
        y: 1.75
    };

    image = 0;

    prop_names = ['image', 'angle', 'progress', 'max_progress'];

    picked_up_by = null;

    progress = 0;
    max_progress = 1;

    collider_type = 'circle';
    collider_radius = 64;
    is_trigger = true;

    distance = 0;
    destination = {
        x: 0,
        y: 0
    };

    
    create() {
        this.image = Math.floor(Math.random() * 6);
        this.angle = Math.random() * 360;
        this.destination = arrayRandom(this.room.destinations);
        // this.destination.x = Math.random() * 3840;
        // this.destination.y = Math.random() * 2160;

        let dx = this.destination.x - this.x;
        let dy = this.destination.y - this.y;

        this.distance = Math.sqrt(dx*dx + dy*dy);
        this.reward = Math.ceil(this.distance * 0.05);

        super.create();

        this.regenerateCollider();
    }

    update(dt) {
        let p = null;

        let players_nearby = this.placeMeetingAll(this.x, this.y, 'Player');
        for (let i = 0; i < players_nearby.length; i++) {
            let _p = players_nearby[i];
            if (!_p.boarded) {
                p = _p;

                if (p.inputs.kinteract && this.picked_up_by === null) {
                    this.picked_up_by = p;
                }
            }
        }

        if (this.picked_up_by !== null) {
            p = this.picked_up_by;

            if (!this.picked_up_by.inputs.kinteract || !this.placeMeeting(this.x, this.y, this.picked_up_by)) {
                this.picked_up_by.progress = 0;
                this.progress = 0;
                this.picked_up_by = null;
            }
        }

        if (p !== null) {
            if (this.picked_up_by !== null) {
                let d = this.picked_up_by;

                d.progress += dt;
                
                this.progress = d.progress;
                this.max_progress = d.progress;

                if (d.progress >= d.max_progress) {
                    d.boarded = true;
                    d.destination = this.destination;
                    d.reward = this.reward;
                    d.progress = 0;

                    d = null;
                    this.remove();
                }
            }

            this.angle = degtorad(vec_dir(p.x - this.x, p.y - this.y));
        }

        super.update(dt);
    }
}