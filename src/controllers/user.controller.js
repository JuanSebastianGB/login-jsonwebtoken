import User from '../models/User.js';

export const createUser = async (req, res) => {
  const { username, email, password, roles } = req.body;
  console.log(req.body);
  res.json(req.body);
};
