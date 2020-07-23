import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import About from '../views/About.vue'
import NewArticle from '../views/NewArticle.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/new-article',
    name: 'NewArticle',
    component: NewArticle
  },
]

const router = new VueRouter({
  mode:'history', // supprime le #
  routes
})

export default router
