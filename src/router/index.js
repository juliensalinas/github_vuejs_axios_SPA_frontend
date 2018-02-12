import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowGreetings from '@/components/ShowGreetings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/show-greetings',
      name: 'ShowGreetings',
      component: ShowGreetings
    }
  ]
})
