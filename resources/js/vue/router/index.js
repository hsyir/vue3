import { createWebHistory, routerKey } from 'vue-router'
import createRouter from '../pages/routes.js'

let router = createRouter(createWebHistory());
console.log(router);
router.beforeEach((to, from) => {
    console.log("to",to);
    let layout =  to.matched[0].components["default"].layout;
    router.app.setLayout(layout || '')
})

export default router;