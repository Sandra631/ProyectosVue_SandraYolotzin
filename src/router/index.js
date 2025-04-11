import { createRouter, createWebHashHistory } from "vue-router";

// Agregando páginas de la aplicación
import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Calculadorav2 from "../components/pages/Calculadorav2.vue";
import Lista from "../components/pages/Lista.vue";
import Horario2 from "../components/pages/Horario2.vue";
import Padre from "../components/pages/Padre.vue";
import Padre2 from "../components/pages/Padre2.vue";
import Eventos from "../components/pages/Eventos.vue";
import Eventos1 from "../components/pages/Eventos1.vue";
import ciclos from "../components/pages/ciclos.vue";
import ciclos2 from "../components/pages/ciclos2.vue";
import Login from "../components/pages/login.vue";
import login from "../components/pages/login.vue";

// Definición de rutas
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/padre", 
    name: "padre",
    component: Padre,
  },
  {
    path: "/padre2", 
    name: "padre2",
    component: Padre2,
  },
  {
    path: "/calculadorav2",
    name: "calculadorav2",
    component: Calculadorav2,
  },
  {
    path: "/lista",
    name: "lista",
    component: Lista,
  },
  {
    path: "/eventos",
    name: "eventos",
    component: Eventos,
  },
  {
    path: "/ciclos",
    name: "ciclos",
    component: ciclos,
  },
  {
    path: "/ciclos2",
    name: "ciclos2",
    component: ciclos2,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/eventos1",
    name: "eventos1",
    component: Eventos1,
  },
  {
    path: "/horario2",
    name: "horario2",
    component: Horario2,
  },
];

// Crear el router
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes, // Se mantiene igual la definición de rutas
});

export default router;

