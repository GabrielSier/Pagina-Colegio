import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Preindex',
    component: () => import('../views/Preindex.vue'),
    meta:{
      Autentificacado:true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta:{
      Autentificacion:true
    }
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/indexA',
    name: 'IndexA',
    component: () => import('../views/IndexA.vue'),
  },
  {
    path: '/api',
    name: 'Api',
    component: () => import('../views/Api.vue')
  },
  {
    path: '/api-estudiantes-crear',
    name: 'ApiEstudiantesCrear',
    component: () => import('../views/ApiEstudiantesCrear')
  },
  {
    path: '/api-maestros-crear',
    name: 'ApiMaestrosCrear',
    component: () => import('../views/ApiMaestrosCrear')
  }
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let usuario= false;
/*   console.log(usuario) */
  let autorizacion=to.matched.some(record=>record.meta.autentificado);

  if(autorizacion && !usuario){
    next('/login');
  }else if(!autorizacion && usuario){
    next('/');
  }else{
    next();
  }

}) 

export default router
