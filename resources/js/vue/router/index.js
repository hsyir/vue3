import { createWebHistory, routerKey } from 'vue-router'
import createRouter from '../pages/routes.js'

let router = createRouter(createWebHistory());

router.beforeEach((to, from) => {
    console.log(to,from);
})

export default router;