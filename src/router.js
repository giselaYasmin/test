import { createRouter } from 'vue-router';

const routes = [
    {
      path: '/Introduccion',
      name: 'Introduccion',
      component: () =>  import('./components/Introduccion.vue'),
    },
    {
      path: '/Portafolio/',
      name: 'Portada',
      component: () => import('./components/Portada.vue')
    },
    {
      path: '/Apuntes',
      name: 'Apuntes',
      component: () => import('./components/Contenidos/Apuntes.vue')
    },
    {
      path: '/Investigaciones',
      name: 'Investigaciones',
      component: () => import('./components/Contenidos/Investigaciones.vue')
      },
    {
    path: '/SdC',
    name: 'SdC',
    component: () => import('./components/Contenidos/SdC.vue')
    },
    {
    path: '/Tareas',
    name: 'Tareas',
    component: () => import('./components/Contenidos/Tareas.vue')
    }
    
];

const router = createRouter({
  //some changes
  //history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
  mode: 'hash'
});

export default router;
