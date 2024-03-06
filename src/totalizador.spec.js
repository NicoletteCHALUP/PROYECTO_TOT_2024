import totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("deberia mostrar en pantalla la cantidad de items ingresado", () => {
    expect(totalizador(3)).toEqual(3);
  });
});
