const Account = require('../models/Account');

module.exports = {

  async create(req, res) {
    try {
      const { name, teamId, initialBalance } = req.body;

      const team = await Account.create({
        name,
        teamId,
        initialBalance
      });

      return res.json(team);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async getAll(req, res) {
    try {
      const { userId } = req.query;

      if(userId) {
        const accounts = await Account.findAll({
          where: {
            active: true
          },
          include: {
            association: 'team',
            include: {
              association: 'users',
              where: {
                id: userId
              }
            }
          }
        });

        return res.json(accounts.filter(account => account.team).map(account => {
          const onlyAccount = Object.create(account);
          delete onlyAccount.dataValues.team
          return onlyAccount
        }));
      }

      const accounts = await Account.findAll();

      return res.json(accounts)

    } catch (error) {
      return res.status(400).json(error);
    }
  },

}
