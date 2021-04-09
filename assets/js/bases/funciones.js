

function saludar( nombre ) {
    console.log('Hola ' + nombre);
}

saludar('Richard');

// FUNCIONES ANONIMAS

const saludar2 = function( nombre ) {
    console.log( 'Hola ' + nombre );
}

saludar2( 'Richard' )

// Funciones con Argumentos

function saludar3( nombre ) {
    console.log( arguments);
}
saludar3('Richard', 31, true, 'Venezuela');

// FUNCIONES DE FLECHA

const saludarFlecha = () => {
    console.log('Hola Flecha');
}
saludarFlecha();

const saludarFlecha2 = ( nombre ) => {
    console.log( 'Hola ' + nombre );
}
saludarFlecha2('Marika Derrico');


// RETURN

function sumar( a, b){
    return a + b;
}
console.log( sumar(1,2) );


// RETURN CON FLECHAS


const sumar2 = ( a,b ) => {
    return a + b;
}
console.log( sumar2(3,4) );

// RETURN funcion EN UNA SOLA LINEA

const sumar3 = ( a,b ) => a + b;
console.log( sumar3(5,5) );

//fin aqui





// PRUEBA PARA SANTIAGO

function getAleatorio() {
    return Math.random();
}
console.log( getAleatorio() );


// Prueba de getAleatorio con flechas

const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );