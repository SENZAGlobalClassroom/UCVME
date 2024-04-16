import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode'
import CVProcessView from '../views/CVProcessView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import CVProcessCompleteView from '../views/CVProcessCompleteView.vue'
import CV from '../views/CVView.vue'
import WalletView from '../views/WalletView.vue'
import HelpView from '../views/HelpView.vue'
import SettingView from '../views/SettingView.vue'
import LikesView from '../views/LikesView.vue'
import AddPostView from '../views/AddPostView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true }
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
      component: CVProcessView,
      meta: { requiresAuth: true }
    },
    {
      path: '/CVComplete',
      name: 'CVComplete',
      component: CVProcessCompleteView,
      meta: { requiresAuth: true }
    },
    {
      path: '/CVUsername',
      name: 'CVUsername',
      component: CV,
      meta: { requiresAuth: true }
    },
    {
      path: '/wallet',
      name: 'WalletView',
      component: WalletView,
      meta: { requiresAuth: true }
    },
    {
      path: '/help',
      name: 'HelpView',
      component: HelpView
    },
    {
      path: '/settings',
      name: 'SettingView',
      component: SettingView,
      meta: { requiresAuth: true }
    }, 
    {
      path: '/likes',
      name: 'LikesView',
      component: LikesView,
      meta: { requiresAuth: true }
    },
    {
      path: '/addpost',
      name: 'AddPostView',
      component: AddPostView,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {

  // If the webpage the user is trying to go to is marked as protected, verify token
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { exp } = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (exp < currentTime) {
          next('/login');  // Token is expired, need a new token
        } else {
          next();  // Token exists and is valid
        }
      } catch (error) {
        console.error('Token decoding failed:', error);
        next('/login');  // Push to log in to cover the error
      }
    } else {
      next('/login');  // No token found, go to login
    }
  } else { // Not protected, just go there
    next();  
  }
});

export default router
