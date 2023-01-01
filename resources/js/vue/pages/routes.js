import {createRouter} from 'vue-router'
import Homepage from './home/Home.vue';
import About from './about/About.vue';
const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/about',
    component: About
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}