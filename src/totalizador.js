function totalizador(a) {
  return a;
}

function totalizador_Precio_Neto(cantidad, precio) {
  return cantidad*precio;
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

function calcularPrecioTotalImpuesto(cantidad, precio, estado) {
  const impuestos = {
      "CA": 8.25,
      "TX": 6.25,
      "AL": 4.00,
      "UT": 6.65,
      "NV": 8.00
  };

  const impuesto = impuestos[estado] || 0;
  const precioNeto = cantidad * precio;
  const precioTotalImpuesto = (precioNeto * impuesto) / 100 + precioNeto;

  return precioTotalImpuesto.toFixed(2);
}

function Descuentos(precioNeto) {
  let descuento = 0;
  if (precioNeto >= 1000 && precioNeto<3000)
  {
    descuento=0.03;
  }
  else{

    if (precioNeto >= 3000)
    {
      descuento=0.05;
    }

  }
  return descuento;
}

function calcularDescuento(PrecioNeto,descuento) {
  
  const TotalDescuento = (PrecioNeto * descuento);
 
  return TotalDescuento.toFixed(2);
}
function calcularPrecioTotal(precioTotalImpuesto, TotalDescuento) {
  

  const PrecioTotalconDescuento = precioTotalImpuesto-TotalDescuento;

  return PrecioTotalconDescuento.toFixed(2);
}
export { totalizador, Impuestos,totalizador_Precio_Neto,calcularPrecioTotalImpuesto,Descuentos,calcularDescuento,calcularPrecioTotal };