import Vue from 'vue'
import Router from 'vue-router'
import Right from '@/components/Right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Right',
      component: Right
    }
  ]
})
