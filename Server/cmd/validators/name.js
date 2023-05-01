import { addValidator } from "#concepts/validator";

addValidator('set name', {
    name: { type: 'string', max: 16 }
});