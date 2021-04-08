

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
    console.log('Hola flecha');
}
saludarFlecha();

