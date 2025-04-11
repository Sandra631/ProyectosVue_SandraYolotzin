<template>
    <div>
      <div class="encabezado">
        <h3 >HORARIO DE CLASES DE SISTEMAS</h3>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" class="dia">Hora</th>
            <th scope="col" class="dia">Lunes</th>
            <th scope="col" class="dia">Martes</th>
            <th scope="col" class="dia">Miércoles</th>
            <th scope="col" class="dia">Jueves</th>
            <th scope="col" class="dia">Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in horario" :key="index">
            <td class="hora">{{ row.hora }}</td> 
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
    { hora: '7:00-9:00', lunes: 'IA', martes: 'Ágil', miercoles: 'IA', jueves: 'Ágil', viernes: 'Ágil' },
    { hora: '9:00-11:00', lunes: 'BD', martes: 'Redes', miercoles: 'BD', jueves: 'Redes', viernes: 'Redes' },
    { hora: '11:00-13:00', lunes: 'Sistemas', martes: 'SO', miercoles: 'Sistemas', jueves: 'SO', viernes: 'SO' },
    { hora: '13:00-15:00', lunes: 'Seguridad', martes: 'Virtualización', miercoles: 'Seguridad', jueves: 'Virtualización', viernes: 'Virtualización' },
    { hora: '15:00-17:00', lunes: 'IA', martes: 'Ágil', miercoles: 'IA', jueves: 'Ágil', viernes: 'Ágil' }
  ]);
  </script>
  
  <style scoped>
.encabezado {
    background-color: #fe91cb;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .encabezado h2 {
    margin: 0;
    color: #000;
  }

  /* Estilo para los encabezados de los días de la semana */
  .dia {
    background-color: #ff86bd; 
    color: #000000; 
    font-weight: bold;
    text-align: center;
  }
  
  /* Estilo para la columna de las horas */
  .hora {
    background-color: #FADADD; 
    font-weight: bold;
    text-align: center;
  }
  </style>
  