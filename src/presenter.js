import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado1-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Cantidad = Number.parseInt(cantidad.value);


  div.innerHTML = "<p>" + totalizador(Cantidad) + "</p>";
});
