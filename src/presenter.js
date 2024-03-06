import { totalizador, Impuestos,totalizador_Precio_Neto,calcularPrecioTotalImpuesto } from './totalizador.js';

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector("#estado");
const div = document.querySelector("#resultado1-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Cantidad = Number.parseInt(cantidad.value);
  const Precio = Number.parseInt(precio.value);
  const Estado=estado.value;
  const impuesto = Impuestos(Estado);
  
  div.innerHTML = `
  <p> Cantidad: ${totalizador(Cantidad)} </p>
  <p> Precio: ${totalizador(Precio)} </p>
  <p> Estado: ${totalizador(Estado)} </p>
  <p> Impuesto (${impuesto}%): $${impuesto.toFixed(2)} </p>
  <p>Precio Neto (${Cantidad} * $${Precio}): $${totalizador_Precio_Neto(Cantidad, Precio)}</p>
  <p>Total con Impuestos: $${calcularPrecioTotalImpuesto(Cantidad, Precio, Estado)}</p>
`;
});
