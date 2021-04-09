

// ejercicio Practico

// un negocio Dias de semana abrimos a las 11
// pero los fines de semana abrimos a las 9

//const dia = 2;   // 0 domingo ... 1 lunes .......
//const horaAcutal = 10;

//let horaApertura;
//let mensaje; // si esta abierto o cerrado

//if ( dia === 0 || dia === 6 ) {  // o se puede hacer: if([0,6].includes(dia));
//    console.log('Fin de semana');
//    horaApertura = 9;

//} else {
//    console.log('Dia de semana');
//    horaApertura = 11;
//}

// ahora se muestra el msj

//if ( horaAcutal >= horaApertura ) {
//    mensaje = 'Esta abierto';
//} else {
//    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
//}


const dia = 2;   // 0 domingo ... 1 lunes .......
const horaAcutal = 10;

let horaApertura;
let mensaje; // si esta abierto o cerrado



// AHORA LO HACEMOS CON APERADOR TERNARIO
// el (?) seria el if y los dos puntos (:) el else

horaApertura = ( [0,6].includes( dia )) ? 9 : 11;

mensaje = ( horaAcutal >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });