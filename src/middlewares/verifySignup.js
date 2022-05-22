import Role from '../models/Role.js';
import User from '../models/User.js';

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const { username, email } = req.body;
    const userByUsername = await User.findOne({ username });
    if (userByUsername)
        res.json({ message: `username ${userByUsername.username} already exist` });
    const userByEmail = await User.findOne({ email });
    if (userByEmail)
        res.json({ message: `Email ${userByEmail.email} already exist` });
    next();
}

export const checkRolesExisted = async (req, res, next) => {
    const { roles } = req.body;
    const ROLES = await Role.find({}).select('name -_id');
    let listOfRoles = [];

    for (let indexRole in ROLES)
        listOfRoles.push(ROLES[indexRole].name);

    if (roles)
        for (let rol in roles) {
            if (!listOfRoles.includes(roles[rol]))
                return res.status(400)
                    .json({ message: `Role ${roles[rol]} doesn't exist` });
        }
    next();
}