import { createWebHistory, routerKey } from 'vue-router'
import createRouter from './routes.js'

let router = createRouter(createWebHistory());
router.beforeEach((to, from) => {
})

export default router;