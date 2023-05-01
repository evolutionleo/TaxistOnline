import { addHandler } from "#cmd/handlePacket";

addHandler('set name', (c, data) => {
    c.name = data.name;
});