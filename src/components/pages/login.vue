<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4 shadow" style="max-width: 400px; width: 100%;">
        <h2 class="text-center mb-4">Iniciar Sesión</h2>
        <form @submit.prevent="iniciarSesion">
          <div class="mb-3">
            <label for="usuario" class="form-label">Usuario</label>
            <input
              v-model="usuario"
              type="text"
              class="form-control"
              id="usuario"
              required
            />
          </div>
          <div class="mb-3">
            <label for="contrasena" class="form-label">Contraseña</label>
            <input
              v-model="contrasena"
              type="password"
              class="form-control"
              id="contrasena"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Entrar</button>
        </form>
        <div class="text-center mt-3">
          <router-link to="/registro">¿No tienes cuenta? Regístrate</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        usuario: "",
        contrasena: "",
      };
    },
    methods: {
      iniciarSesion() {
        // Aquí puedes poner una validación simple o con base de datos simulada
        if (this.usuario === "admin" && this.contrasena === "1234") {
          this.$router.push("/");
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  
