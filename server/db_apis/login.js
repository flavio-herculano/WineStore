const database = require('../services/database.js');

const baseQuery =
 `select cpf "id",
 pass "desc" from cliente`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.cd_tipo = context.id;

    query += `\nwhere cpf = :cpf`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;