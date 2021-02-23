const TransactionType = require('../models/TransactionType');

module.exports = {

  async create(req, res) {
    try {
      const { name } = req.body;

      const transactionType = await TransactionType.create({
        name
      });

      return res.json(transactionType);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async get(req, res) {
    try {
      
      const transactionTypes = await TransactionType.findAll();
      return res.json(transactionTypes);

    } catch (error) {
      console.log('error', error)
      return res.status(400).json(error);
    }
  },

}
