import { addHandler } from "#cmd/handlePacket";
import { clamp } from "#util/maths";


addHandler('player controls', (c, data) => {
    if (!c.entity)
        return;
    
    c.entity.inputs = {
        ...c.entity.inputs,
        
        move: data.move,
        
        kright: data.kright,
        kleft: data.kleft,
        kup: data.kup,
        kdown: data.kdown,
        
        kinteract: data.kinteract//,
        // ktrap: data.ktrap
    };

    c.entity.inputs.ktrap ||= data.ktrap;
    
    c.entity.inputs.move.x = clamp(c.entity.inputs.move.x, -1, 1);
    c.entity.inputs.move.y = clamp(c.entity.inputs.move.y, -1, 1);
});

