<script setup>
import { ref } from 'vue'
let tasks = ref([])
let task = {
    id: tasks.value.length,
    nom:'',
    descripcio:'',
    autor:'',
    important:false
}

const addTask = () => {
    if(task.nom !="" && task.descripcio !="" && task.autor !="" ){
        let objeto = {
            id: getId(),
            nom: task.nom,
            descripcio: task.descripcio,
            autor: task.autor,
            important: task.important
        }
        tasks.value.push(objeto)
        console.log(tasks.value)
    }else{
        alert("Faltan datos")
    }
}
const getId = () => {
    let id = 0
    if(tasks.value.length == 0){
        return id
    }else{
        id = tasks.value[tasks.value.length-1].id
        return id+1
    }
}
const deleteTask = (index) => {
    for(let i in tasks.value){
        if(tasks.value[i].id == index){
            tasks.value.splice(i,1)
        }
    }
}

</script>
<template>
<h1>TaskList interactiva</h1>
<p>Clica la que quieras ver para verla en detalle</p>
<div>
    <h3>Añadir tarea:</h3>
    <p>Nombre de la tarea</p>
    <input type="text" v-model="task.nom" />
    <p>Descripción de la tarea</p>
    <input type="text" v-model="task.descripcio" />
    <p>Autor de la tarea</p>
    <input type="text" v-model="task.autor" /><br>
    ¿Es importante?
    <input type="checkbox" v-model="task.important" />
    <button @click="addTask">Añadir</button>
</div>

<div>
    <h3>Lista de tareas</h3>
    <ul>
        <li v-for="(task,index) in tasks" :key="index">
            <div @click="deleteTask(task.id)" class="taskCard">

                <h4>{{task.nom}}</h4>
                <p> {{ task.id }} </p>
                <p>{{task.descripcio}}</p>
                <p>{{task.autor}}</p>
            </div>
        </li>
    </ul>
</div>

</template>

<style scoped>
li{
    all:unset;  
}
.taskCard{
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: inline-block;
    border-radius: 10px;
    background-color: #f0f0f0;
}
</style>