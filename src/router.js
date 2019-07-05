import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/UserList.vue')
    },
    {
      path: '/user-input',
      name: 'user-input',
      component: () => import('./views/UserInput.vue')
    }
  ]
})
