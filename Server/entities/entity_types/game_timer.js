import Entity from "#concepts/entity";

export default class GameTimer extends Entity {
    static manager = true;
    static type = 'GameTimer';
    static object_name = 'oGameTimer';

    max_timer = 60 * 5; // in seconds
    timer = this.max_timer;
    started = false;

    prop_names = ['timer', 'max_timer', 'started'];

    start() {
        started = true;
        this.timer = this.max_timer;
    }
    
    end() {
        // game over here
    }

    create() {

    }

    update(dt) {
        if (this.started)
            this.timer -= dt;
        
        if (this.timer <= 0) {
            this.end();
        }
    }
}