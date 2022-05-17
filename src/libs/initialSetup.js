import Role from '../models/Role.js';

export const createRoles = async () => {
    try {
        const counter = await Role.estimatedDocumentCount();

        if (counter > 0) return;

        const roles = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save()
        ]);
        console.log(roles);
    } catch (error) {
        console.error(error);
    }
}