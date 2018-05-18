import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page01 from '../components/page01'
import Page02 from '../components/page02'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      meta: {
        title: '主页'
      },
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page01',
      meta: {
        title: '第一页'
      },
      name: 'Page01',
      component: Page01
    },
    {
      path: '/page02',
      meta: {
        title: '第二页'
      },
      name: 'Page02',
      component: Page02
    },
    {
      path: '*',
      redirect: '/index'
    }
  ],
  mode: 'history'
})
//
// Router.beforeEach((to, from, next) => {
//   window.document.title = to.meta.title
//   next()
// })
