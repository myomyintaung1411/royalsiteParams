import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/playrules',
    meta: { title: 'PlayRules' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: () => import('./views/Playrules.vue')
  },
  {
    path: '/login',
    meta: { title: 'Login' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: () => import('./views/Login.vue')
  },
  {
    path: '/register',
    meta: { title: 'Register' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: () => import('./views/Register.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
