import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MovieDetail from '../views/MovieDetail.vue'
import About from '../views/About.vue'
import Privacy from '../views/Privacy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/movie/:id',
      name: 'movieDetail',
      component: MovieDetail,
    },
    {
      path: '/about-us',
      name: 'about',
      component: About,
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: Privacy,
    },
  ],
})

export default router
