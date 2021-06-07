const tratamentoAno = require("../../functions/tratamentoAno");

describe("função tratamentoAno", () => {
  test("Retorno de data palíndromo",async () => {
    const retorno =await tratamentoAno("12/02/2021");
    expect(retorno).not.toBeNull();
  });
  test("Retorno null palíndromo",async () => {
    const retorno =await tratamentoAno("12/02/20212");
    expect(retorno).toBeNull();
  });
});
