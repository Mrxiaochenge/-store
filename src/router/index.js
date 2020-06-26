import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import category from '../views/category.vue'
import categorylist from '../views/categorylist.vue'
import product from '../views/product.vue'
import buyCart from '../views/buycart.vue'
import site from '../views/site.vue'
import topicList from '../views/TopicList.vue'
import ME from '../views/me.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'category',
        component: category
    },
    {
        path: '/categorylist/:id',
        name: 'categorylist',
        component: categorylist,
        props: true
    },
    {
        path: '/product/:id',
        name: 'product',
        component: product,
        props: true
    },
    {
        path: '/buyCart',
        name: 'buyCart',
        component: buyCart
    },
    {
        path: '/site',
        name: 'site',
        component: site
    },
    {
        path: '/topicList',
        name: 'topicList',
        component: topicList
    },
    {
        path: '/ME',
        name: 'ME',
        component: ME
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router