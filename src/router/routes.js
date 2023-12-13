const Home = () => import(/* webpackChunkName: "home" */ '../components/Home.vue')
const Post = () => import(/* webpackChunkName: "post" */ '../components/Post.vue')
const About = () => import(/* webpackChunkName: "about" */ '../components/About.vue')
const Team = () => import(/* webpackChunkName: "team" */ '../components/Team.vue')
const Error404 = () => import(/* webpackChunkName: "error-404" */ '../components/Error404.vue')
const Company = () => import(/* webpackChunkName: "company" */ '../components/Company.vue')
const CompanyHistory = () => import(/* webpackChunkName: "company-history" */ '../components/CompanyHistory.vue')
const CompanyAwards = () => import(/* webpackChunkName: "company-awards" */ '../components/CompanyAwards.vue')

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
        component: About,
        meta: { auth: true },
    },
    {
        path: '/a-empresa',
        name: 'company',
        component: Company,
        meta: { sidebar: true },
        children: [
            {
                path: 'historia',
                name: 'company-history',
                component: CompanyHistory,
            },
            {
                path: 'premios',
                name: 'company-awards',
                component: CompanyAwards,
            },
        ],
        // beforeEnter(to, from, next) {
        //     if (from.name !== 'post') {
        //         next()
        //     }
        // },
    },
    {
        path: '/equipe/:member',
        name:'team',
        component: Team,
        props: route => ({ member: route.params.member, color: 'green' }),
        meta: { auth: true },
    },
    {
        path: '/:pathMatch(.*)',
        component: Error404,
    }
]

export default routes
