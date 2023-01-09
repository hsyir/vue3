import {createRouter} from 'vue-router'
import Homepage from '../pages/home/Home.vue';
import About from './../pages/about/About.vue';
const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/about',
    component: About,
    meta:{ layout: "basic" } 
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}