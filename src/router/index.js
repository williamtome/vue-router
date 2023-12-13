import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const isLogged = true

router.beforeEach((to, from, next) => {
    let n = null
    if (to.meta.auth && !isLogged) {
        n = { name: 'home' }
    }
    next(n)
})

export default router
