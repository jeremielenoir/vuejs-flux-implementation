import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import Page1 from '@/components/Page1'
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
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
