import { createWebHistory, routerKey } from 'vue-router'
import createRouter from './routes.js'
import { useAuthStore } from '../store/auth.js';

let router = createRouter(createWebHistory());

router.beforeEach(async (to, from) => {

    const auth = useAuthStore();

    try {
        if (auth.$state.access_token !== null && !auth.isLogedIn)
            await auth.fetchUser();
    }
    catch (err) {
        console.log(err)
    }

    if (to.meta.requireAuth && !auth.isLogedIn) {
        auth.setIntendedUrl(to.fullPath)
        auth.showLoginForm()
        return false
    }

})

export default router;