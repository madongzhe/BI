import Vue from 'vue'
import Router from 'vue-router'
import Left from '@/components/Left'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Left',
      component: Left
    }
  ]
})
