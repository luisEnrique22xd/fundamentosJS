// funciones de JavaScript
//funcion sin parametros y sin retorno

function saluda(){
    console.log("Hola")
}
saluda();

//funcion con parametros y sin retorno
function addOne(num){
    console.log(`el ${num} + 1 = ${num}+1`);
}
addOne(15);

//funcion con parametros y con retorno
function suma (num1, num2){
    return num1+num2;
}
const result = suma(12,34);
console.log(result);

//funcion como constantes

//funciones anonimas 
const resta = function(num1, num2){
    return num1-num2;
}
const resultado = resta(12,2);
console.log(resultado);

//Funciones de flecha Arrow Functions 

(param1, param2)=>{
    //Code 
    //return
}

const duplica = (num)=>{
    return num*2;
}

const multiplica = (num1,num2)=>{
    console.log('Multiplicacion de numeros')
    return num1* num2;
}

const doble = duplica(16);
console.log(doble);

const returnM = multiplica(13,26);
console.log(resultM)


//Simplificado Arrow Funcitions
let cambiaMinusculas = (word)=>{
    return word.toLowerCase();
}

//Si solo es un unico parametro se puede omitir parentesis
//Si la unica linea es el return se pueden omitir llaves

cambiaMinusculas = word => word.toLowerCase();
