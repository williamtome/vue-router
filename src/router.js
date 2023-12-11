import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Post from './components/Post.vue'
import About from './components/About.vue'
import Team from "@/components/Team"
import Error404 from "@/components/Error404"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/post/:id(\\d+)',
        name: 'post',
        component: Post,
    },
    {
        path: '/sobre',
        name: 'about',
        component: About
    },
    {
        path: '/equipe/:member',
        name:'team',
        component: Team,
        props: route => ({ member: route.params.member, color: 'green' }),
    },
    {
        path: '/:pathMatch(.*)',
        component: Error404,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
