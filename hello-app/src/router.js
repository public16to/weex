/*global Vue*/
import Router from 'vue-router'
import MyTask from '@/components/myTask.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'MyTask',
      component: MyTask
    }
  ]
})
