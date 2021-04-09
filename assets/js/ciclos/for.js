
// CICLO FOR


// for tradicional
console.warn('For tradicional');

const heroes = ['Batman', 'Superman', 'Spiderman', 'Robin', 'Aquaman' ];

for ( let i = 0; i < heroes.length; i++ ) {

    console.log( heroes[i]);
}


// for in
console.warn('For in');

for ( let i in heroes) {
    console.log( heroes[i] );
}


// for of
console.warn('For of');

for( let i of heroes ) {
    console.log(i);
}

