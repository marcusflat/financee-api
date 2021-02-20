const Team = require('../models/Team');
const User = require('../models/User');

module.exports = {

  async create(req, res) {
    try {
      const { name, ownerId } = req.body;

      const team = await Team.create({
        name,
        ownerId
      });

      return res.json(team);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async addUser(req, res) {
    try {
      const { teamId, userId } = req.body;

      const team = await Team.findByPk(teamId);
      const user = await User.findByPk(userId);

      const response = await team.addUser(user);
      
      return res.json(response);

    } catch (error) {
      console.log('error', error)
      return res.status(400).json(error);
    }
  },

}