

let juegos = ['Zelda', 'Millonario', '007', 'Mision'];

    console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length -1];

    console.log( {primero,ultimo} );


// Muy impportante esto de abajo Para observar todos los elementos del array

// Paso 1

juegos.forEach( (elemento, indice, arr) => {

    console.log({ elemento, indice, arr });
} );



// Paso 2 para incluir un array adicional

let nuevaLongitud = juegos.push( 'F-Zero' );

    console.log({ nuevaLongitud, juegos });