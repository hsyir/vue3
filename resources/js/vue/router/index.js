import { createWebHistory, routerKey } from 'vue-router'
import createRouter from './routes.js'
import { useAuthStore } from '../store/auth.js';

let router = createRouter(createWebHistory());
router.beforeEach((to, from) => {
    if(to.meta.requireAuth){
        const auth = useAuthStore();
        auth.showLoginForm();    
    }
})

export default router;