const { Printer, User } = require("../repositories/model");

const userController = {

  //GET ALL USERS
  getAllUser: async (req, res) => {
    try {
      const users = await User.find(); // find all users in userchema
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE AN USER
  deleteAnUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id); // real delete an user use : findByIdAndDelete()
      res.status(200).json("Deleted successfully !!!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;