import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hypothese from '../views/Hypothese.vue'
import Chronik from '../views/Chronik.vue'
import Quellen from '../views/Quellen.vue'
import NewStory from '../views/NewStory.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:story/hypothese',
    name: 'Hypothese',
    component: Hypothese
  },
  {
    path: '/:story/chronik',
    name: 'Chronik',
    component: Chronik
  },
  {
    path: '/:story/quellen',
    name: 'Quellen',
    component: Quellen
  },
  {
    path: '/new',
    name: 'NewStory',
    component: NewStory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
