import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado1-div");
const div2 = document.querySelector("#resultado2-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Cantidad = Number.parseInt(cantidad.value);
  const Precio = Number.parseInt(precio.value);


  div.innerHTML = "<p> Cantidad: " + totalizador(Cantidad) + "</p>";
  div2.innerHTML = "<p> Precio: " + totalizador(Precio) + "</p>";
});
