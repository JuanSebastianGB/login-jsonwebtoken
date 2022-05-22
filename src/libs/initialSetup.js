import Role from '../models/Role.js';
import User from '../models/User.js';

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

export const createAdmin = async () => {
    try {
        const counter = await User.estimatedDocumentCount();

        if (counter > 0) return;

        new User({
            username: "admin",
            password: "$2b$10$Od45E4XdNng//QIUhJg2QeZt3DiqfNta5Ae4ZhtuGwk5khrjxO.bm",
            email: "admin@gmail.com",
            roles: ["admin"]
        }).save();

    } catch (error) {
        console.error(error);
    }
}