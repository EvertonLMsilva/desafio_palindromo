"use strict";

const tratamentoAno = require("./functions/tratamentoAno");

module.exports.handler = async (event) => {

  const data = JSON.parse(event.body);
  
  const { ano } = data;
  
  if (!ano)
    ({
      statusCode: 404,
      body: JSON.stringify({ error: "Parametro não enviado!" }),
    });

  const result = await tratamentoAno(ano);

  if (result == null) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Formato de data errado!" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ result }),
  };
};
