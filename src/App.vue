<template>
  <div id="app">
    <div class="container mt-3">
      <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">Navbar</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <!-- Submenú: Calculadora -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Calculadora
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/">Calculadora V1</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/Calculadorav2">Calculadora V2</router-link>
                  </li>
                </ul>
              </li>

              <!-- Submenú: Horario -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Horario
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/about">Horario</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/horario2">Horario (ejemplo)</router-link>
                  </li>
                </ul>
              </li>

              <!-- Submenú: Props -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Props
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/padre">Props</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/padre2">Props (ejemplo)</router-link>
                  </li>
                </ul>
              </li>

              <!-- Submenú: Ciclos -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ciclos
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/ciclos">Ciclos</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/ciclos2">Ciclos (ejemplo)</router-link>
                  </li>
                </ul>
              </li>

              <!-- Submenú: Eventos -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Eventos
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/eventos1">Eventos</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/eventos">Eventos (ejemplo)</router-link>
                  </li>
                </ul>
              </li>

              <!-- Submenú: Login -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item custom-dropdown-item" to="/login">Iniciar sesión</router-link>
                  </li>
    
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <h1 class="mt-4">Desarrollo Ágil</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.custom-navbar {
  background-color: #ff69b4 !important;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Hover sobre enlaces del menú */
.navbar-nav .nav-link:hover {
  color: #ffe6f0 !important;
}

/* Hover para opciones del submenu */
.custom-dropdown-item:hover {
  background-color: #ffc0cb !important; /* Color rosa claro */
  color: white !important;
  border-radius: 10px;
}
</style>


