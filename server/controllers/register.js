const register = require('../db_apis/register.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);

    const rows = await register.find(context);

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

function getclienteFromRec(req) {
    const cliente = {
      cli_id: parseInt().cli_id,
      nome: req.body.nome,
      cpf: req.body.cpf,
      email: req.body.email,
      pass: req.body.pass
    };
  
    return cliente;
  }
  
  async function post(req, res, next) {
    try {
      let cliente = getclienteFromRec(req);
  
      cliente = await register.create(cliente);
  
      res.status(201).json(cliente);
    } catch (err) {
      next(err);
    }
  }
  module.exports.post = post;
