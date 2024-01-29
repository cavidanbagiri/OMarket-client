import {createRouter, createWebHashHistory} from 'vue-router';

const HomeView = ()=> import('../views/view.home.vue');

const routes = [
  {path: '/', name:"HomeView", component: HomeView}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router