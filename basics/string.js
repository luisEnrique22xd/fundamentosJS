// strings
const fistName='Luis Enrique';
const lastName="Sanchez";
const fullName = fistName+' '+lastName;

console.log("I'm"+fistName);
console.log('I\'m'+fistName);
console.log(fullName);
//String multilinea
const menu =`
Elige: 
1.- Opcion 1.
2.- Opcion 2.
3.- Opcion 3.
`;
console.log(menu);
//String templates
//placeholder ${}
const city = 'Huamantla';
const phone = '2471067211';
const rol = 'Student';

const presentation = `
Hola 
Soy ${ fullName },${ rol } en la UTT
Vivo en ${ city }
Este es mi numero de telefono si gustas contactarme ${ phone }.`;
console.log (presentation);
