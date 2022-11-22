const products = require('../db_apis/products.js');

async function get(req, res, next) {
  try {
    const productget = {};

    productget.id = parseInt(req.params.id, 10);

    const rows = await products.find(productget);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;