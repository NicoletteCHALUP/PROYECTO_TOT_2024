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

    if (precioNeto >= 3000 && precioNeto<7000)
    {
      descuento=0.05;
    }
    else
    {
      if (precioNeto >= 7000 && precioNeto<10000)
      {
        descuento=0.07;
      }
      else{
        if (precioNeto >= 10000 && precioNeto <30000 )
        {
          descuento=0.10;
        }
        else{
          if (precioNeto >= 30000 )
          {
            descuento=0.15;
          }
          else
          {
            descuento=0;
          }
        }

      }
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
function DescuentoCategoria(categoria) {
  let descuento_categoria = 0;
  switch (categoria) {
    case "Alimentos":
      descuento_categoria = 0.02;
      break;
    case "Bebidas_alcoholicas":
      descuento_categoria = 0;
      break;
    case "Material_de_escritorio":
      descuento_categoria = 0.015;
      break;
    case "Muebles":
      descuento_categoria = 0;
      break;
    case "Electronicos":
      descuento_categoria = 0.01;
      break;
  
    default:
      descuento_categoria = 0;
  }
  return descuento_categoria;
}
function ImpuestoCategoria(categoria) {
  let impuesto_categoria = 0;
  switch (categoria) {
    case "Alimentos":
      impuesto_categoria = 0;
      break;
    case "Bebidas_alcoholicas":
      impuesto_categoria = 0.07;
      break;
    case "Material_de_escritorio":
      impuesto_categoria = 0;
      break;
    case "Muebles":
      impuesto_categoria = 0.03;
      break;
    case "Electronicos":
      impuesto_categoria = 0.04;
      break;
   
    default:
      impuesto_categoria = 0;
  }
  return impuesto_categoria;
}
function TotalDescuentoCategoria(PrecioNeto,descuentoCategoria) {
  const Total_descuentoCategoria=PrecioNeto*descuentoCategoria;

  return Total_descuentoCategoria.toFixed(2);
}
function TotalImpuestoCategoria(PrecioNeto,ImpuestoCategoria) {
  const Total_impuestoCategoria=PrecioNeto*ImpuestoCategoria;

  return Total_impuestoCategoria.toFixed(2);
}
function PrecioTotalconCategoria(PrecioTotal,Total_DescuentoCategoria,Total_impuestoCategoria) {
  const Precio_TotalconCategoria = PrecioTotal + Total_impuestoCategoria - Total_DescuentoCategoria;

  return Precio_TotalconCategoria.toFixed(2);
}
export { totalizador, Impuestos,totalizador_Precio_Neto,calcularPrecioTotalImpuesto,Descuentos,calcularDescuento,calcularPrecioTotal,DescuentoCategoria,TotalDescuentoCategoria,TotalImpuestoCategoria,PrecioTotalconCategoria,ImpuestoCategoria };