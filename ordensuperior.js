// Funciones de Orden superior
// High Order Functions
// Funciones que reciben otras funciones como paramentros

const myFunctionWithBigName=()=>{
    console.log('Esta es una funcion');
}

myFunctionWithBigName();

const myFun=myFunctionWithBigName;

myFun();

const funOne=()=>{
    console.log('Ejecuta funcion 1');
}
const funTwo=(name)=>{
    console.log('Hola' + name);
    console.log('Ejecuta funcion 2');
}

funOne();
funTwo('Jersain');

const funThree=(otherFunction)=>{
    otherFunction();
    console.log('Ejecuta funcion 3')
}


funThree(funOne);
