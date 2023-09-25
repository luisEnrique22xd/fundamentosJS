//Condicionales
//if (exp){}
const age = 18;
if(age>=18){
    console.log('Es mayor');
}

// if (exp) {} else {}
if(age>=18){
    console.log('Es mayor');
}else {
    console.log('Es menor');
}

// if ternario (exp)? true: false;
(age >=18)? 
    console.log('Es mayor'):
    console.log('Es menor');

//if(exp) {} else if (exp) else{}
const ppt= Math.random();
if(ppt<0.33){
    console.log('Piedra');
} else if (ppt<0.66){
    console.log('Papel');
} else{
    console.log('Tijera')
}
// switch / case 
const day = Math.ceil(Math.random()*7);
switch (day){
    case 1:
        console.log('Es Domingo');
        break;
    case 2:
        console.log('Es Lunes');
        break;
    case 3:
        console.log('Es Martes');
        break;
    case 4:
        console.log('Es Miercoles');
        break;
    case 5:
        console.log('Es Jueves');
        break;
    case 6:
        console.log('Es Viernes');
        break;
    case 7:
        console.log('Es Sabado');
        break;
}
//Truthy and Falsy 
const numOfStudents = 10;
if (numOfStudents ===0){
    console.log('No hay alumnos')
} else {
  console.log(`Hay ${numOfStudents} alumnos`)
}
if(numOfStudents){
    console.log(`Hay ${numOfStudents} alumnos`)
}else{
    console.log('No hay alumnos')
}

const usuario='Luis';
const invitado= usuario || 'Desconocido';

console.log(invitado)