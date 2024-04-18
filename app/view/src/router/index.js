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
      component: LoginView,
      meta: { requiresGuest: true }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpView,
      meta: { requiresGuest: true }
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
  // Attempt to get a token from local storage
  const token = localStorage.getItem('token');

  // If the route the user is trying to go to is protected, verify the user is logged in
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // If token exists, make sure it is valid
    if (token) {
      const { exp } = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      // Token expiry check, delete token if expired and force login again
      if (exp < currentTime) {
        localStorage.removeItem('token');
        next('/login');
      } else {
        next();
      }
    } else { // User has no token, send them to login
      next('/home');
    }
  }
  // Else if the webpage the user is going to is only for non logged in users
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    // If the user has a token
    if (token) {
      const { exp } = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      // If the token is valid
      if (exp > currentTime) {
        next('/');  // Redirect to home, already logged in
      } else { // Token is not valid
        localStorage.removeItem('token');
        next();  // Proceed to the page the user wanted to
      }
    } else {
      next();  // No token found, proceed
    }
  } else {
    next();  // For any routes that do not require any authentication, catchall
  }
});


export default router
