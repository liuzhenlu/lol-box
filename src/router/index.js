import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import First_screen from '@/components/First_screen'
import Imform from '@/components/Imform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'First_screen',
      component: First_screen
    },
    {
      path: '/Imform',
      name: 'Imform',
      component: Imform
    },
  ]
})
