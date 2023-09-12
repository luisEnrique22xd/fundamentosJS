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

