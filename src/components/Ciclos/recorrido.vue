<script>
export default{
    data () {
        return{
            //datos de alumnos
            alumnos:[
                {nc:12345, nombre: 'Sandra', carrera: 'ISC'},
                {nc:12346, nombre: 'Yolotzin', carrera: 'ISC'},
                {nc:12346, nombre: 'Reyes', carrera: 'ISC'},
                {nc:12346, nombre: 'García', carrera: 'ISC'},
                {nc:12347, nombre: 'Reyes', carrera: 'ISC'}
            ]
        }
    }
}
</script>
<template>

<div class="container">
    <h3 class="mt-4 ">Lista de alumnos</h3>
    <ul>
        <li v-for="alumno in alumnos" :key="alumno.nc">
        <strong>{{ alumno.nombre }}</strong> -
        <strong>{{ alumno.carrera }}</strong>
        </li>
    </ul>

</div>

</template>

<style>
h3{
    color: rgb(255, 255, 255);
    background-color: rgb(231, 55, 155);
    border-radius: 30px;
    padding: 10px;
    text-align: center;
}
ul{
    list-style: none;
    padding: 0%;

}
li{
    color: white;
    background-color: black;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
}
</style>