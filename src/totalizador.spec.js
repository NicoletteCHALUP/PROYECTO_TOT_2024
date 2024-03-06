import { totalizador,Impuestos } from './totalizador';

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

describe("Impuestos", () => {

  it("deberia delvolver el impuesto del estado seleccionado en este caso de CA", () => {
    expect(Impuestos("CA")).toEqual(8.25);
  });
 
  it("deberia delvolver el impuesto del estado seleccionado en este caso de UT", () => {
   expect(Impuestos("UT")).toEqual(6.65);
  });
 it("deberia delvolver el impuesto del estado seleccionado en este caso de NV", () => {
   expect(Impuestos("NV")).toEqual(8.00);
  });
 it("deberia delvolver el impuesto del estado seleccionado en este caso de TX", () => {
   expect(Impuestos("TX")).toEqual(6.25);
  });
 it("deberia delvolver el impuesto del estado seleccionado en este caso de AL", () => {
   expect(Impuestos("AL")).toEqual(4.00);
  });

});