const User = require('../models/User');

module.exports = {

  async create(req, res) {
    try {
      const { firebaseId, name, email } = req.body;

      const user = await User.create({
        firebaseId, 
        name,
        email
      });

      return res.json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async getOne(req, res) {
    try {
      const { uuid } = req.params;

      const user = await User.findOne({
        where: {
          uuid
        } 
      })

      return res.json(user);

    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.findAll()
      return res.json(users);

    } catch (error) {
      console.log('error', error)
      return res.status(400).json(error);
    }
  }



}