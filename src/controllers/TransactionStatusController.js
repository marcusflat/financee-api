const TransactionStatus = require('../models/TransactionStatus');

module.exports = {

  async create(req, res) {
    try {
      const { name } = req.body;

      const transactionStatus = await TransactionStatus.create({
        name
      });

      return res.json(transactionStatus);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async get(req, res) {
    try {
      
      const transactionStatuses = await TransactionStatus.findAll();
      return res.json(transactionStatuses);

    } catch (error) {
      return res.status(400).json(error);
    }
  },

}
