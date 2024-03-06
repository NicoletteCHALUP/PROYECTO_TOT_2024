function totalizador(a) {
  return a;
}

function Impuestos(estado) {
  let impuesto = 0;
  switch (estado) {
    case "UT":
      impuesto = 6.65;
      break;
    case "NV":
      impuesto = 8.00;
      break;
    case "TX":
      impuesto = 6.25;
      break;
    case "AL":
      impuesto = 4.00;
      break;
    case "CA":
      impuesto = 8.25;
      break;
    default:
      impuesto = 0;
  }
  return impuesto;
}

export { totalizador, Impuestos };

