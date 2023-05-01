import Entity from '#concepts/entity';

export default class Spikes extends Entity {
    static type = 'Spikes';
    static object_name = 'oSpikes';

    base_size = {
        x: 48,
        y: 48
    };

    scale = {
        x: 1.25,
        y: 1.25
    };

    owner_name = '';
    activated = false;

    sendEveryTick = true;

    stun_duration = 1; // after the spikes disappear
    die_delay = 5 * 1000;

    activate_reward = 50;
    activation_delay = 1.2;

    prop_names = ['owner_name', 'activated'];

    update(dt) {
        this.activation_delay -= dt;

        if (this.activation_delay < 0) {
            let ps = this.placeMeetingAll(this.x, this.y, 'Player');
            for (let p of ps) {
                if (p.name !== this.owner_name) {
                    p.effects.stun = this.stun_duration;
    
                    if (!this.activated) {
                        // reward the trapper
                        let p = this.room.players.find((p) => p.name === this.owner_name);
                        p.entity.gold += this.activate_reward;
    
                        // self-destruct
                        this.activated = true;
                        setTimeout(() => {
                            this.die();
                        }, this.die_delay);
                    }
                }
            }
        }

        super.update(dt);
    }
}