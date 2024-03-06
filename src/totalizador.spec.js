import { totalizador,Impuestos,totalizador_Precio_Neto,calcularPrecioTotalImpuesto } from './totalizador';

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

describe("totalizador_Precio_Neto", () => {
  it("deberia delvolver el numero ingresado del precio neto  de item respectivo con la cantidad", () => {
    expect(totalizador_Precio_Neto(3,4)).toEqual(12);
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

describe("calcularPrecioTotalImpuesto", () => {

  it("deberia delvolver el precio total con impuesto del estado seleccionado en este caso de CA", () => {
    expect(calcularPrecioTotalImpuesto(2,3,"CA")).toEqual("6.50");
  });
  it("deberia delvolver el precio total con impuesto del estado seleccionado en este caso de TX", () => {
    expect(calcularPrecioTotalImpuesto(2,3,"TX")).toEqual("6.38");
  });
  it("deberia delvolver el precio total con impuesto del estado seleccionado en este caso de AL", () => {
    expect(calcularPrecioTotalImpuesto(2,3,"AL")).toEqual("6.24");
  });
  it("deberia delvolver el precio total con impuesto del estado seleccionado en este caso de UT", () => {
    expect(calcularPrecioTotalImpuesto(2,3,"UT")).toEqual("6.40");
  });

  it("deberia delvolver el precio total con impuesto del estado seleccionado en este caso de NV", () => {
    expect(calcularPrecioTotalImpuesto(2,3,"NV")).toEqual("6.48");
  });
});