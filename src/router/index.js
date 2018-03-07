import Vue from 'vue'
import Router from 'vue-router'
import ApplicationHome from '../pages/ApplicationHome'
import ApplicationJob from '../pages/ApplicationJob'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'ApplicationHome',
      component: ApplicationHome
    },
    {
      path: '/home',
      name: 'ApplicationHome',
      component: ApplicationHome
    },
    {
      path: '/job',
      name: 'ApplicationJob',
      component: ApplicationJob
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x:0, y:0 }
  }
})
