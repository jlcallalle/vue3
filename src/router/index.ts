import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../shared/views/HomeView.vue'
import AboutView from '../shared/views/AboutView.vue' */
import HomeView from '@/shared/views/HomeView.vue'
import AboutView from '@/shared/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      // component: () => import('../shared/views/CounterView.vue')
      component: () => import('../counter/views/CounterView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    { 
      path: '/:pathMatch(.*)*', 
      //redirect:() => ({ name : 'home'}),
      redirect:() => (
        console.log('pagina incorrecta'),
        { name : 'home'}
      ),
    }
  ]
})

export default router
