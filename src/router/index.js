import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Favorites from '@/pages/Favorites.vue'
import LoginSignup from '@/pages/LoginSignup.vue'
import ProductDetail from '@/pages/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginSignup
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
  path: '/cart',
  name: 'Cart',
  component: () => import('@/pages/Cart.vue')
}
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router