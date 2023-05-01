import Entity from "#concepts/entity";

export default class GameTimer extends Entity {
    static manager = true;
    static type = 'GameTimer';
    static object_name = 'oGameTimer';

    countdown = 5;
    max_timer = 60 * 5; // in seconds
    timer = this.max_timer;
    started = false;

    prop_names = ['timer', 'max_timer', 'started', 'countdown'];

    start() {
        this.started = true;
        this.timer = this.max_timer;
    }
    
    end() {
        this.room.gameOver();
    }

    create() {

    }

    update(dt) {
        if (this.started) {
            if (this.countdown > -1) {
                this.countdown -= dt;
                if (this.countdown <= -1) { // start the game!
                    this.room.playing = true;
                }
            }
            else {
                this.timer -= dt;
            }

            if (this.timer <= 0) {
                this.timer = 0;
                this.end();
                this.started = false;
            }
        }

        super.update(dt);
    }
}