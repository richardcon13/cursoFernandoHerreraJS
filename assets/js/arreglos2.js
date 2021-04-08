

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



// Paso 2 para incluir un array adicional al Final (.push)

let nuevaLongitud = juegos.push( 'F-Zero' );

    console.log({ nuevaLongitud, juegos });

// Paso 3 para incluir un array adicional al inicio (.unshift)

nuevaLongitud = juegos.unshift('JUego New');
console.log({ nuevaLongitud, juegos });


// BORRAR 

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });




// BORRAR RANGO DE JUEGOS


let pos = 1;

console.log({ juegos });
let juegosBorrados = juegos.splice( pos, 2 );
console.log({ juegosBorrados, juegos });


// Encontrar la posicion de un elemento

let metroidIndex = juegos.indexOf('007');
console.log({metroidIndex});


