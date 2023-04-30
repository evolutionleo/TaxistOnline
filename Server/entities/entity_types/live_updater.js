import fs from 'fs';
import trace from '#util/logging';
import Entity from '#concepts/entity';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
global.require = require;

export default class LiveUpdater extends Entity {
    static type = 'LiveUpdater';
    // static object_name = 'oLiveUpdater';
    static manager = true;
    last_s = '';

    create() {
        trace('i was spawned!');
        this.on('remove', () => {
            trace('DED :(');
        })
    }

    update(dt) {
        let s = fs.readFileSync('./live_code.js', 'utf-8');
        if (s != this.last_s) {
            this.last_s = s;
            trace('Live code updated!');
            try {
                eval(s);
            }
            catch(e) {
                trace(e);
            }
        }
    }
}