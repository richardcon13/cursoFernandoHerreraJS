
//FUNCION COMPLETA

function crearPersona( nombre, apellido ){
    return {
        nombre,
        apellido
    }
}

const persona = crearPersona( 'Richard','Contreras');
console.log( persona );

// FUNCION CON RETURN EN UNA SOLA LINEA es igual que el ejercicio anterior

const crearPersona2 =  (nombre, apellido ) => ({ nombre, apellido });
const persona2 = crearPersona2( 'Valeria','Contreras');
console.log( persona2 );


// FUNCION CON ARGUMENTOS

function imprimeArgumentos() {
    console.log( arguments );
}

imprimeArgumentos( 10, true, false, 'Ramon', 'hola');

// FUNCION CON ARGUMENTOS CON FLECHA

const imprimeArgumentos2 = () => {
    console.log( arguments );
}

imprimeArgumentos('Luis', 10, 50, 'Perro');

// igual pero retornando la Funcion

const imprimeArgumentos3 = (...args) => {
   return args;
}

const argumentos = imprimeArgumentos3('gato', 10, 80, 'jamon');
console.log(argumentos);



// DEFINIENDO LA CONST COMO ARREGLO DE LOS ELEMENTOS

const imprimeArgumentos4 = (...args) => {
    return args;
 }
 
 const [animal, edad, altura, alimento] = imprimeArgumentos4('gato', 10, 1.80, 'jamon');
console.log({ animal, edad, altura, alimento })