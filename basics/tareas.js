const inputTarea = document.getElementById('inputTarea');
const inputTime = document.getElementById('time');
const listaTareas = document.querySelector('#tareas ul');

const tareas = [];

function addTarea(){
    const dato = inputTarea.value;
    const time = inputTime.value;
    if(dato){
        tareas.push({tarea: dato, time:time});
        inputTarea.value = '';
        inputTime.value='';
        showTareas();
    }
    
}

function showTareas(){

    const tareasLi = tareas.map(tarea => `<li>${ tarea.tarea} - ${tarea.time} </li>`);
    listaTareas.innerHTML = tareasLi.join('');
}