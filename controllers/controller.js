import User from "../models/user.js";
const controller = {
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      res.send(error);
    }
  },

  createNew: async (req, res) => {
    console.log(req.body);
    try {
      const user = await User.create(req.body);
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  },

  update: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const user = await User.findByIdAndUpdate(id, { ...body }, { new: true });
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  },
}

export default controller;