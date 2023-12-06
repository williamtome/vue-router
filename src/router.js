import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomePage.vue'
import Post from './components/PostPage.vue'
import About from './components/AboutPage.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/post', component: Post },
    { path: '/sobre', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
