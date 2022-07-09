import Vue from 'vue'
import App from './App.vue'

import HomePage from '@/views/second/homepage'
import Journalism from '@/views/second/Journalism'
import Sports from '@/views/second/Sports'

import Sports1 from '@/views/second/childrenViews/Sports1'
import Sports2 from '@/views/second/childrenViews/Sports2'
import Sports3 from '@/views/second/childrenViews/Sports3'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/homePage',
  },
  {
    path: '/homepage',
    component: HomePage,
  },
  {
    path: '/Journalism',
    component: Journalism,
  },
  {
    path: '/Sports',
    component: Sports,
    children: [
      {
        path: '/',
        redirect: '/Sports/Sports1',
      },
      {
        path: '/Sports/Sports1',
        component: Sports1,
      },
      {
        path: '/Sports/Sports2',
        component: Sports2,
      },
      {
        path: '/Sports/Sports3',
        component: Sports3,
      },
    ],
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
