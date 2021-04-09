


// CICLO WHILE

console.warn('While');

const carros = ['ford','toyota','mazda','wolfvagen'];

let i = 0;

while( i < carros.length ) {
    if( i === 1){
        i++;
        continue;
    }

    console.log( carros [i] );
    i++;

}


// CICLO DO WHILE

console.warn('Do While');

let j = 0;

do {
    console.log ( carros[j] );
    j++;

} while( carros[j] );

