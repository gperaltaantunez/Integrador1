let nombreDeLaTienda = "Aviajar"; // Jaja
let promoTokio = "Tokio";
let promoNewYork = "New York";
let precioTokio = 599;
let precioNewYork = 399;
let codigoDeDescuento = 49;

//    1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta.

const nombre = prompt("¡Bienvenidx! Por favor, ingresá tu nombre:");
alert (`👋¡Hola ${nombre}!`)

//   2. Mostrarle los productos en promoción (2 productos).

alert (`Tenemos estos destinos en promoción:
🗼 Viaja a Tokio por u$s 599 ¡Todo incluído!
🗽 Viaja a New York por u$s 399 ¡Todo incluído!`);

//    3. Preguntarle si quiere comprar el producto 1.
    // a. Si responde "SI" preguntar cuántas unidades va a llevar

const destinoTokio = prompt(`✈ ¿Querés viajar a Tokio? Responde "si" o "no"`) == "si" && prompt(`Ingresá por favor la cantidad de pasajeros`);  

//    4. Preguntarle si quiere comprar el producto 2.
    // a. Si responde "SI" preguntar cuántas unidades va a llevar

const destinoNewYork = prompt(`✈ ¿Querés viajar a New York? Responde "si" o "no"`) == "si" && prompt(`Ingresá por favor la cantidad de pasajeros`);  

//    5. Mostrar el detalle de la compra con:
    //   - subtotales de cada producto (precio x cantidad) 
    //   - total (suma de subtotales)

const subtotalTokio = (precioTokio * destinoTokio);
const subtotalNewYork = (precioNewYork * destinoNewYork);
let total = subtotalTokio + subtotalNewYork;

// 6. Preguntar si desea abonar con tarjeta de crédito
    // a. Si responde "SI" preguntar en cuántas cuotas desea abonar  

const metodoDePago = prompt(`💳¿Deseas abonar con tarjeta de crédito? Responde "si" o "no"`) == "si" && prompt(`Por favor, ingresá la cantidad de cuotas deseadas:`);

// 7. Mostrar el detalle de la compra con:
    //   - subtotales de cada producto (precio x cantidad) 
    //   - total (suma de subtotales)
    //   - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar

let detalleDeCompra = (`Este es el detalle de tu compra:"
- Subtotal   Tokio      ${subtotalTokio}
- Subtotal   New York   ${subtotalNewYork}
- Total:                ${total}`);
