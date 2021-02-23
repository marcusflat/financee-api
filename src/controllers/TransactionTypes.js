const TransactionTypes = require('../models/TransactionTypes');

module.exports = {

  async create(req, res) {
    try {
      const { name } = req.body;

      const transactionTypes = await TransactionTypes.create({
        name
      });

      return res.json(transactionTypes);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async get(req, res) {
    try {
      
      const transactionTypes = await TransactionTypes.findAll();
      return res.json(transactionTypes);

    } catch (error) {
      console.log('error', error)
      return res.status(400).json(error);
    }
  },

}
