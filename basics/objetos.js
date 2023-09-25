//Objetos de JavaScript
/* 
objeto ={
    key: value,
    key: value
}
objeto, key 
objeto['key']
*/

const subjet ={
    name: 'Aplicaciones web',
    cuatrimestre: 3,
    professor: 'Francisco',
    'Classroom':'Lab Redes I',
    'total hours': 70,
    weekhours: 5,
}

console.log(subjet);
console.log(subjet.name);
console.log(subjet.professor);
console.log(subjet['Classroom']);
console.log(subjet['total hours']);
subjet.professor = 'Francisco Lopez'
subjet.career = 'TIADSM';
console.log(subjet)

const student = {
    name: 'Laura Alicia',
    age: 21,
    califications: [10,10,8],
    city: 'Apizaco'
}

const group = {
    name: '4B',
    students: [student,student,student],
    subjets: [subjet,subjet,subjet]
}

console.log(group);
console.log(group.subjets[0].professor);
console.log(group.students[1].califications);
console.log(group.students[1].califications[0]);