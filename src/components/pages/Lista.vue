<template>
    <div>
      <h1>Lista de elementos</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Lista',
    data() {
      return {
        items: ['Elemento 1', 'Elemento 2', 'Elemento 3']
      };
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  