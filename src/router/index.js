import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detalhes from '../views/Detalhes.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Página Inicial
    path: '/',
    name: 'Home',
    component: Home
  },

  // Detalhes do personagem
  {
    path: '/detalhes/:id',
    name: 'Detalhes',
    component: Detalhes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
