import { createRouter, createWebHistory } from 'vue-router'
import CVProcessView from '../views/CVProcessView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import CVProcessCompleteView from '../views/CVProcessCompleteView.vue'
import CV from '../views/CVView.vue'
import WalletView from '../views/WalletView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpView
    },
    {
      path: '/cvProcess',
      name: 'CVProcess',
      component: CVProcessView
    },
    {
      path: '/CVComplete',
      name: 'CVComplete',
      component: CVProcessCompleteView
    },
    {
      path: '/CVUsername',
      name: 'CVUsername',
      component: CV
    },
    {
      path: '/wallet',
      name: 'WalletView',
      component: WalletView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
