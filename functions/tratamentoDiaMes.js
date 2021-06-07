"use strict";

//Função para retornar o dia mes e ano palindromo
module.exports = function tratamentoDiaMes (data) {
  let diaMes;
  //inverte os caracteres da string
  diaMes = data.split("").reverse().join("");
  //Confere dia e mês
  if (
    diaMes[0] + diaMes[1] > 31 || 
    diaMes[2] + diaMes[3] > 12 || 
    (diaMes[0] == "0" && diaMes[1] == "0") || 
    (diaMes[2] == "0" && diaMes[3] == "0") || 
    diaMes[0] == undefined || diaMes[1] == undefined || 
    diaMes[2] == undefined || diaMes[3] == undefined || 
    (diaMes[0] + diaMes[1] > 28 && diaMes[2] + diaMes[3] == "02") 
  ) {
    return false;
  }

  //concatena dia mês e ano para resposta
  diaMes = diaMes[0] + diaMes[1] + "/" + diaMes[2] + diaMes[3] + "/" + data;
  return diaMes;
};