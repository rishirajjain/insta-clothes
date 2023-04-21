import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue'; // Replace 'Home' with the name of your main component, if different
import Product from '../pages/ProductPage.vue'; // Make sure you have created this component as shown in the previous answer

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/Product.vue')
    }

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;