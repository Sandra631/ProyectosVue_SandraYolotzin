<template> 
    <div class="container">
      <div class="row mt-4">
        <div>
          <h4>Evento clic</h4>
          <button @click="clic" class="btn btn-danger" type="button">Dale clic</button> 
          <button @click="soyBoton" class="btn btn-warning mx-2" type="button">Dale clic 2</button> 
        </div>
  
        <div>
          <h4>Evento Change</h4>
          <label class="input-group-text" for="">Ingresa tu nombre</label>
          <input class="form-control mt-2" type="text" id="nombre" @change="nombreE">
          <p>El nombre ingresado es: <strong>{{ nombre }}</strong></p>             
        </div>
  
        <div>
          <h3>Evento de mouseenter y mouseleave</h3>
        </div>
  
        <div class="center" 
          style="color: #fff; width: 300px; height: 200px; background-color: blue; text-align: center; padding: 15px; border-radius: 14px;"
          @mouseenter="mostrarMensaje" 
          @mouseleave="ocultarMensaje">
          <p>Pasa el mouse</p>
          <p class="text-white">{{ mensaje }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        mensaje: '',
      }
    },
    methods: {
      clic() {
        alert("Gracias por darle clic");
      },
      soyBoton() {
        alert("Soy un botón");
      },
      nombreE(event) {
        this.nombre = event.target.value;
      },
      mostrarMensaje() {
        this.mensaje = "El mouse está dentro del rectángulo";
      },
      ocultarMensaje() {
        this.mensaje = "El mouse está fuera del rectángulo";
      }
    }
  }
  </script>
  
  <style>
  /* Puedes añadir estilos aquí si deseas */
  </style>
  