import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Member = () => import('../views/member/Member')
const Cart = () => import('../views/cart/Cart')
const Search = () => import('../views/search/Search')
const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/member', component: Member},
  {path: '/cart', component: Cart},
  {path: '/search', component: Search}
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'mui-active'
})
export default router
