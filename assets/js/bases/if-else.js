

let a = 5;

if ( a < 10) {
    console.log('A es menor a 10');
}


console.log('Fin de programa');


//  Calculo de fecha

const hoy = new Date(); {}
console.log({ hoy });

// Calculo dia de semana

let dia = hoy.getDay();
console.log({ dia });


if ( dia === 5){
    console.log( 'Hoy es viernes' );
} else {
    console.log('Hoy no es domingo')
}

// Ejercicio sin usar IF ELSE o SWITCH, unicamente objetos y arreglos

// Con objeto
dia = 4;

const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log ( diasLetras[dia] || 'Dia no definido');

// Con arreglo

const diasLetras2 = [
     'Domingo',
     'Lunes',
     'Martes',
     'Miercoles',
     'Jueves',
     'Viernes',
     'Sabado',
]
console.log ( diasLetras2[dia] || 'Dia no definido');
