import Vue from 'vue'
import Router from 'vue-router'
import Middle from '@/components/Middle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Middle',
      component: Middle
    }
  ]
})
