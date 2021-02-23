const Category = require('../models/Category');

module.exports = {

  async create(req, res) {
    try {
      const { name, teamId } = req.body;

      const [ category ] = await Category.findOrCreate({
        where: {
          name
        },
        defaults: {
          name, 
          teamId
        }
      });

      return res.json(category);
    } catch (error) {
      console.log('error', error)
      return res.status(400).json(error);
    }
  },

  async get(req, res) {
    try {
      const { userId } = req.query;

      if(userId) {
        const categories = await Category.findAll({
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

        return res.json(categories.filter(category => category.team).map(category => {
          const onlyCategory = Object.create(category);
          delete onlyCategory.dataValues.team
          return onlyCategory
        }));
      }

      const accounts = await Category.findAll();

      return res.json(accounts)

    } catch (error) {
      return res.status(400).json(error);
    }
  },

}
