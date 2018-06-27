import Vue from 'vue'
import Router from 'vue-router'
import BI from '@/components/BI'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BI',
      component: BI
    }
  ]
})
