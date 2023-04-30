global.clients = [];
global.maps = [];           // loaded in 02_maps.js
if (global.config.entities_enabled) {
    global.entities = [];       // loaded in 03_entities.js
    global.manager_entities = [];
    global.entity_names = {};
    global.entity_objects = {};
}
global.lobbies = {};        // loaded in 04_lobbies.js 
global.parties = {};
global.cmd_validators = {};
export {};