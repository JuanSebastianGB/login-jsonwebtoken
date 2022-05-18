
import { verify } from 'jsonwebtoken';
import config from '../config.js';
import Role from '../models/Role.js';
import User from '../models/User.js';

export const verifyToken = async (req, res, next) => {
    try {
        const { headers } = req;
        const { SECRET } = config;

        const token = headers['x-access-token'];

        if (!token) res.status(403).json({ message: 'token required' });
        const verifiedToken = verify(token, process.env.SECRET || SECRET);

        req.userId = verifiedToken.id;

        const user = await User.findById(verifiedToken['id'], { password: '' });

        if (!user) res.status(404).json({ response: 'user not found' });

        next();
    } catch (error) {
        res.status(500).json({ message: 'unauthorized' });
    }

}

export const isAdmin = async (req, res, next) => {

    const { userId } = req;
    const user = await User.findById(userId);

    const roles = await Role.find({ _id: { $in: user.roles } });
    for (const element in roles)
        if (roles[element].name === 'admin') {
            next();
            return;
        }

    res.status(500).json({ message: 'unauthorized, require Admin role' });

}
export const isModerator = async (req, res, next) => {
    const { userId } = req;
    const user = await User.findById(userId);

    const roles = await Role.find({ _id: { $in: user.roles } });
    for (const element in roles)
        if (roles[element].name === 'moderator') {
            next();
            return;
        }

    res.status(500).json({ message: 'unauthorized, require Moderator role' });
}