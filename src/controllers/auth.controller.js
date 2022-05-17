
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config.js';
import Role from '../models/Role.js';
import sign from 'jsonwebtoken/sign';

export const signIn = async (req, res) => {
    console.log(process.env.SECRET);
    const { username, email, password, roles } = req.body;
    const { sign } = jwt;
    const user = {
        username,
        email,
        password: await User.encryptPassword(password)
    }
    const newUser = new User(user);

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map(role => role._id);
    } else {
        const role = await Role.findOne({ name: 'user' });
        console.log(role._id);
        newUser.roles = [role._id];
    }

    const createdUser = await newUser.save();
    const token = sign(
        { id: createdUser._id },
        process.env.SECRET || SECRET,
        {
            expiresIn: 86400
        })
    res.json({ token });
}

export const signUp = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email }).populate('roles');

    if (!user) res.status(400).json({ message: 'User not found' });

    const matchPassword = await User.comparePassword(password, user.password);
    if (!matchPassword) res.status(401).json({ message: 'wrong password' });

    const token = sign({ id: user._id }, process.env.SECRET || SECRET, {
        expiresIn: 86400
    });
    console.log(user);
    res.status(200).json({ token });
}