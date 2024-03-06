import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector("#estado");
const div = document.querySelector("#resultado1-div");
const div2 = document.querySelector("#resultado2-div");
const div3 = document.querySelector("#resultado3-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Cantidad = Number.parseInt(cantidad.value);
  const Precio = Number.parseInt(precio.value);
  const Estado=estado.value;


  div.innerHTML = "<p> Cantidad: " + totalizador(Cantidad) + "</p>";
  div2.innerHTML = "<p> Precio: " + totalizador(Precio) + "</p>";
  div3.innerHTML = "<p> Estado: " + totalizador(Estado) + "</p>";
});
