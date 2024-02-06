import {createRouter, createWebHistory} from 'vue-router';

const HomeView = ()=> import('../views/view.home.vue');
const AdminView = () => import('../views/views.admin.vue');

const routes = [
  {path: '/', name:"HomeView", component: HomeView},
  {path: '/admin', name:"AdminView", component: AdminView}
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router