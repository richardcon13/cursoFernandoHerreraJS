


const elMayor = (a,b) => {
    return (a > b) ? a : b;
}

// o tamb se hace mas corto / const elMayor = (a,b) => (a > b) ? a : b;

console.log( elMayor(10, 15) );


// otro ejercicio

const tieneMembresia = ( miembro ) => (miembro) ? '2 dolares' : '10 dolares';
console.log( tieneMembresia(false) );



// ejercicio de notas con operador ternario

let nota = 50; // A+, A, B+, B ...
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado });
                    