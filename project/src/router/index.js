import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePage/HomePageView.vue'
import AboutPageView from '../views/AboutView/AboutPageView.vue'
import ServicePageView from '../views/ServiceView/ServicePageView.vue'
import ContactPageView from '../views/ContactView/ContactPageView.vue'

const routes = [
  { path: '/', component: HomePageView },
  { path: '/about', component: AboutPageView },
  { path: '/services', component: ServicePageView },
  { path: '/contact', component: ContactPageView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
