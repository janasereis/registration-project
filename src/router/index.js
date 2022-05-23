import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'


const routes = [
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
