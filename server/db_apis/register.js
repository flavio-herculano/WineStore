const oracledb = require('oracledb');
const database = require('../services/database.js');

const baseQuery =
 `SELECT CD_CLIENTE "id",NOME "nome",CPF "CPF",TELEFONE "Phone", EMAIL "mail", pass "pass" FROM CLIENTE`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.cd_cliente = context.id;

    query += `\nwhere cd_cliente = :cd_cliente`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

const createSql =
 `insert into cliente (

     cd_cliente, NOME,CPF,EMAIL, pass

  ) values (:cli_id,
    :nome,
    :cpf,
    :email,
    :pass
  ) returning cd_cliente
  into :cd_cliente`;

async function create(emp) {
  const cliente = Object.assign({}, emp);

  cliente.cd_cliente = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  };

  const result = await database.simpleExecute(createSql, cliente, { autoCommit: true} );

  cliente.cd_cliente = result.outBinds.cd_cliente[0];

  return cliente;
}

module.exports.create = create;