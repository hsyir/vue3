import {createRouter} from 'vue-router'
import Homepage from '../pages/home/Home.vue';
import About from './../pages/about/About.vue';
import Secret from './../pages/secret/Secret.vue';
const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/about',
    component: About,
    meta:{ layout: "basic", requireAuth: false } 
  },
  {
    path: '/secret',
    component: Secret,
    meta:{ layout: "basic", requireAuth: true } 
  },
/*   {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{ layout: "basic", requireAuth: false } 
  }, */
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}