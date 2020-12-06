import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hypothese from '../views/Hypothese.vue'
import Chronik from '../views/Chronik.vue'
import Quellen from '../views/Quellen.vue'
import File from '../views/File.vue'
import Thema from '../views/Thema.vue'
import Marketing from '../views/Marketing.vue'
import Kontakte from '../views/Kontakte.vue'
import Kalendar from '../views/Kalendar.vue'
import NewStory from '../views/NewStory.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hypothese',
    name: 'Hypothese',
    component: Hypothese
  },
  {
    path: '/chronik',
    name: 'Chronik',
    component: Chronik
  },
  {
    path: '/quellen',
    name: 'Quellen',
    component: Quellen
  },
  {
    path: '/file',
    name: 'File',
    component: File
  },
  {
    path: '/thema',
    name: 'Thema',
    component: Thema
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: Marketing
  },
  {
    path: '/kalendar',
    name: 'Kalendar',
    component: Kalendar
  },
  {
    path: '/kontakte',
    name: 'Kontakte',
    component: Kontakte
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
