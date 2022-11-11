const database = require('../services/database.js');

const baseQuery =
 `select cd_tipo "id",
 ds_tipo "desc" from prod_tipo`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.cd_tipo = context.id;

    query += `\nwhere cd_tipo = :cd_tipo`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

