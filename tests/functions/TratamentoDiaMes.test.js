const tratamentoDiaMes = require("../../functions/tratamentoDiaMes");

describe("função tratamentoDiaMes", () => {
  test("Retorna falso se data não for palíndromo", () => {
    const retorno = tratamentoDiaMes("20212");
    expect(retorno).toBe(false);
  });
  test("Retorno data palíndromo", () => {
    const retorno = tratamentoDiaMes("2021");
    expect(retorno).toBe("12/02/2021");
  });
});
