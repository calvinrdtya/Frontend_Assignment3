// const app = new Vue({
//     el: '#app',
//     router
// });




/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// this is home page
Vue.component('home-component', require('./components/Home.vue').default);

// this is parent component
Vue.component('parent-product', require('./components/ParentProduct.vue').default);
Vue.component('parent-cart', require('./components/ParentCart.vue').default);

// this is child component
Vue.component('list-component', require('./components/ChildProduct.vue').default);
Vue.component('cart-component', require('./components/ChildCart.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import store from './store'
require('./bootstrap');


import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});


const app = new Vue({
    el: '#app',
    store,
    router
});
