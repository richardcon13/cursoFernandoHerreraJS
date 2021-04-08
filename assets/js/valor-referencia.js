
// practica 1

let a = 10;
let b = a;
a= 30;

console.log({ a,b });

// practica 2

let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = "Ana";

console.log({ juan, ana });

// OTRO EJERCICIO

const frutas = ['Manzana', 'Pera', 'Pina'];

const otrasFrutas = [...frutas]; // o tmb con frutas.slice();
// esto [...frutas se hace para que no se repita la fruta ya agregada en ambos]
otrasFrutas.push('Mango'); // agregar una fruta nueva

console.table({frutas, otrasFrutas});



