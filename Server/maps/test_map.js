import GameMap from '#concepts/map';

export default new GameMap({
    name: 'Test Room',
    room_name: 'rTest',
    description: 'A test map, a placeholder if you will',
    
    width: 3840,
    height: 2160,
    
    spawn_type: 'distributed',
    start_pos: [
        { x: 1536, y: 1408 },
        { x: 1536, y: 1472 }
    ],
    max_players: 99
});
