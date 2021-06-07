"use strict";

const tratamentoDiaMes = require("./tratamentoDiaMes");

//loop de ano até achar um palindromo
module.exports = async function tratamentoAno (ano){
  let anoPalindromo;
  let count = 1;

  const diaMes = ano.split("/");

  //Confere se o ano é maior que 4 numeros
  if (diaMes[0].length > 2 || diaMes[1].length > 2 || diaMes[2].length != 4) {
    return null;
  }

  //loop para tratar se o ano é valido como palindromo
  for (var i = 0; i < count; i++) {
    let somaAno = parseInt(diaMes[2]) + count;
    let convertAno = somaAno.toString();
    //use a função tratamentoDiaMes para conferir se é palindromo;
    anoPalindromo = await tratamentoDiaMes(convertAno);

    count++;
    
    if (anoPalindromo || anoPalindromo == null) {
      return anoPalindromo ? anoPalindromo : null;
    }
  }
};
