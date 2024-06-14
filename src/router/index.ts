import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'
import AboutView from '../shared/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../shared/views/CounterView.vue')
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
