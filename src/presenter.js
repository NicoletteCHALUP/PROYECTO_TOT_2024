import { totalizador, Impuestos,totalizador_Precio_Neto,calcularPrecioTotalImpuesto,Descuentos,calcularDescuento,calcularPrecioTotal } from './totalizador.js';

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector("#estado");
const div = document.querySelector("#resultado1-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Cantidad = Number.parseInt(cantidad.value);
  const Precio = Number.parseInt(precio.value);
  const PrecioNeto=totalizador_Precio_Neto(Cantidad, Precio);
  const Estado=estado.value;
  const impuesto = Impuestos(Estado);
  const Descuento =Descuentos(totalizador_Precio_Neto(Cantidad, Precio));
  const PrecioTotalImpuesto=calcularPrecioTotalImpuesto(Cantidad, Precio, Estado);
  const TotalDescuento=calcularDescuento(PrecioNeto, Descuento);
  const PrecioTotal= calcularPrecioTotal(PrecioTotalImpuesto,TotalDescuento);
  div.innerHTML = `
  <p>Precio Neto (${Cantidad} * $${Precio}): $${totalizador_Precio_Neto(Cantidad, Precio)}</p>
  <p> Descuento (%${Descuento*100}): $${TotalDescuento} </p>
  <p> Impuesto para ${Estado}(%${impuesto}): $${(impuesto.toFixed(2)/100) * PrecioNeto} </p>
  <p>Precio Total (descuento e impuesto): $${PrecioTotal}</p>
`;
});
