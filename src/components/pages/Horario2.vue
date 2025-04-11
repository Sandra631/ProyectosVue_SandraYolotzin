<template>
    <div>
      <div class="encabezado">
        <h2 >Horario de clases de Sistemas</h2>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in horario" :key="index">
            <td>{{ row.hora }}</td>
            <td>{{ row.lunes }}</td>
            <td>{{ row.martes }}</td>
            <td>{{ row.miercoles }}</td>
            <td>{{ row.jueves }}</td>
            <td>{{ row.viernes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const horario = ref([
    { hora: '7:00 - 9:00', lunes: 'IA', martes: 'Ágil', miercoles: 'web', jueves: 'IA', viernes: 'Móvil' },
    { hora: '7:00 - 9:00', lunes: 'IA', martes: 'Ágil', miercoles: 'web', jueves: 'IA', viernes: 'Móvil' },
    { hora: '7:00 - 9:00', lunes: 'IA', martes: 'Ágil', miercoles: 'web', jueves: 'IA', viernes: 'Móvil' },
    { hora: '7:00 - 9:00', lunes: 'IA', martes: 'Ágil', miercoles: 'web', jueves: 'IA', viernes: 'Móvil' }
  ]);
  </script>
  
  <style scoped>
  .encabezado {
    background-color: #d3a4e2;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .encabezado h2 {
    margin: 0;
    color: #000;
  }
  
 
  </style>
  