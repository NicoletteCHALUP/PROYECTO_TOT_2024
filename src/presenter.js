import { totalizador, Impuestos,totalizador_Precio_Neto,calcularPrecioTotalImpuesto,Descuentos,calcularDescuento,calcularPrecioTotal,DescuentoCategoria,TotalDescuentoCategoria,TotalImpuestoCategoria,PrecioTotalconCategoria,ImpuestoCategoria } from './totalizador.js';

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const div = document.querySelector("#resultado1-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const Categoria=categoria.value;
  const descuentoCategoria= DescuentoCategoria(Categoria);
  const impuestoCategoria= ImpuestoCategoria(Categoria);
  const Cantidad = Number.parseFloat(cantidad.value);
  const Precio = Number.parseFloat(precio.value);
  const PrecioNeto=Number.parseFloat(totalizador_Precio_Neto(Cantidad, Precio));
  const Total_DescuentoCategoria=Number.parseFloat(TotalDescuentoCategoria(PrecioNeto,descuentoCategoria));
  const Total_ImpuestoCategoria=Number.parseFloat(TotalImpuestoCategoria(PrecioNeto,impuestoCategoria));
  const Estado=estado.value;
  const impuesto = Number.parseFloat(Impuestos(Estado));
  const Descuento =Number.parseFloat(Descuentos(totalizador_Precio_Neto(Cantidad, Precio)));
  const PrecioTotalImpuesto=Number.parseFloat(calcularPrecioTotalImpuesto(Cantidad, Precio, Estado));
  const TotalDescuento=Number.parseFloat(calcularDescuento(PrecioNeto, Descuento));
  const PrecioTotal= Number.parseFloat(calcularPrecioTotal(PrecioTotalImpuesto,TotalDescuento));
  const Precio_TotalconCategoria= Number.parseFloat(PrecioTotalconCategoria(PrecioTotal,Total_DescuentoCategoria,Total_ImpuestoCategoria));
  
  div.innerHTML = `
  <p> Descuento por Categoria ${Categoria}(%${descuentoCategoria*100}): $${Total_DescuentoCategoria} </p>
  <p> Impuesto para ${Categoria}(%${impuestoCategoria*100}): $${Total_ImpuestoCategoria} </p>
  <p>Precio Neto (${Cantidad} * $${Precio}): $${PrecioNeto}</p>
  <p> Descuento (%${Descuento*100}): $${TotalDescuento} </p>
  <p> Impuesto para ${Estado}(%${impuesto}): $${(impuesto.toFixed(2)/100) * PrecioNeto} </p>
  <p>Precio Total (descuento,impuesto e Categoria): $${Precio_TotalconCategoria.toFixed(2)}</p>
`;
});
