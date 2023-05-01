let angle_diff;
import("#util/maths").then(m => angle_diff = m.angle_diff);

const Player = global.entities.find((c) => c.type === 'Player');

if (global.interv)
    clearInterval(global.interv);

global.interv = setInterval(() => {
    // let spikes = global.clients[0]?.entity?.room.entities.ofType('Spikes');
    // console.log(spikes?.length ? spikes[0].props : null);

    // global.clients.forEach(c => {
    //     if (c.entity) {
    //         c.entity.rot_spd = 90;
    //     }
    // })

    // let e = global.clients[0]?.entity
    // if (e) {
    //     console.log(angle_diff(e.spd_dir, e.dir))
    // }
}, 1000);