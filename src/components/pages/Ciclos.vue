<template>
    <div class="container">
      <h3 class="mt-4">Lista de alumnos</h3>
      <ul>
        <li v-for="alumno in alumnos" :key="alumno.nc" class="alumno-item">
          <strong>{{ alumno.nombre }}</strong> - 
          <strong>{{ alumno.carrera }}</strong>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        alumnos: [
          { nc: 12345, nombre: 'Sandra', carrera: 'ISC' },
          { nc: 12346, nombre: 'Yolotzin', carrera: 'ISC' },
          { nc: 12347, nombre: 'Reyes', carrera: 'ISC' },
          { nc: 12348, nombre: 'García', carrera: 'ISC' },
          { nc: 12349, nombre: 'Reyes', carrera: 'ISC' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  h3 {
    color: white;
    background-color: rgb(231, 55, 155);
    border-radius: 30px;
    padding: 10px;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  .alumno-item {
    background-color: black;
    color: white;
    padding: 10px;
    margin: 10px 0;
    border-radius: 12px;
    font-size: 18px;
    text-align: center; 
  }
  </style>
  