import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import UserAccount from '../views/UserAccount.vue'
import About from '../views/About.vue'
import NewArticle from '../views/NewArticle.vue'
import AllArticles from '../views/AllArticles.vue'
import Article from '../views/Article.vue'

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
    path: '/user-account',
    name: 'UserAccount',
    component: UserAccount
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
  {
    path: '/all-articles',
    name: 'AllArticles',
    component: AllArticles
  },
  {
    path: '/article/:id',// matching de route dynamique
    name: 'Article',
    component: Article
  },
]

const router = new VueRouter({
  mode:'history', // supprime le # dans les urls
  routes
})

export default router
