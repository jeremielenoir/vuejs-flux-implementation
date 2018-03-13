import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import Axios from '@/components/Axios'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
