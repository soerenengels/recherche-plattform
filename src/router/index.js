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
import Settings from '../views/Settings.vue'
import NewStory from '../views/NewStory.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hypothesis',
    name: 'Hypothesis',
    component: Hypothese
  },
  {
    path: '/chronicles',
    name: 'Chronicles',
    component: Chronik
  },
  {
    path: '/sources',
    name: 'Sources',
    component: Quellen
  },
  {
    path: '/file',
    name: 'File',
    component: File
  },
  {
    path: '/topic',
    name: 'Topic',
    component: Thema
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: Marketing
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Kalendar
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Kontakte
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
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
