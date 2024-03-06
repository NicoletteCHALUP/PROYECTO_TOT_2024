import totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("deberia mostrar en pantalla la cantidad de items ingresado", () => {
    expect(totalizador(3)).toEqual(3);
  });
  it("deberia mostrar en pantalla la Precio por item ingresado", () => {
    expect(totalizador(4)).toEqual(4);
  });
  it("deberia mostrar en pantalla el estado seleccionado", () => {
    expect(totalizador("UT")).toEqual("UT");
  });
});
