import Vue from 'vue'
import Router from 'vue-router'

// my components
import Home from './components/Home.vue'
import Product from './components/ParentProduct.vue'
import Cart from './components/ParentCart.vue'


export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/product",
    name: "product",
    component: Product
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  }
]
