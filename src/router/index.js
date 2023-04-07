import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/create',
      component: () => import('../views/HomeView.vue'),
      children:[
        {
          path: '/create',
          name: 'ExistingPerson',
          component: () => import('../views/ExistingPersonView.vue'),
        },
        {
          path: '/create',
          name: 'ExistingPerson',
          component: () => import('../views/ExistingPersonView.vue'),
        }

      ]
    },

  ]
})

export default router
