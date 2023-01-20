import { createWebHistory, routerKey } from 'vue-router'
import createRouter from './routes.js'

let router = createRouter(createWebHistory());
router.beforeEach((to, from) => {
    if(to.meta.requireAuth)
        return {name: "login"};
})

export default router;