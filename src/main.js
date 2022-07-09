import Vue from 'vue'
import App from './App.vue'

import My from '@/views/My'
import Classification from '@/views/classification'
import HomePage from '@/views/homePage'
import Order from '@/views/order'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/homePage',
  },
  {
    path: '/homePage',
    component: HomePage,
  },
  {
    path: '/order',
    component: Order,
  },
  {
    path: '/classification',
    component: Classification,
  },
  {
    path: '/my',
    component: My,
  },
]

const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
