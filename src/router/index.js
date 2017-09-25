import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/components/login'
import Content from '@/components/content'
import Clgl from '@/components/content_components/clgl_content'
import Dzcj from '@/components/content_components/dzcj_content'
import Kfz from '@/components/content_components/kfz_content'
import Lyj from '@/components/content_components/lyj_content'
import Sqfw from '@/components/content_components/sqfw_content'
import Tcdz from '@/components/content_components/tcdz_content'
import Zygl from '@/components/content_components/zygl_content'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/hello',
    //   name: 'Hello',
    //   component: Hello,
    //   children: [
    //     {
    //       path: '/Hello/child',
    //       name: 'HelloChild',
    //       component: HelloChild
    //     }
    //   ]
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/content',
      name: 'Content',
      component: Content,
      children: [
        {
          path: '/content/clgl',
          name: 'ClglChild',
          component: Clgl
        },
        {
          path: '/content/dzcj',
          name: 'DzcjChild',
          component: Dzcj
        },
        {
          path: '/content/kfz',
          name: 'KfzChild',
          component: Kfz
        },
        {
          path: '/content/lyj',
          name: 'LyjChild',
          component: Lyj
        },
        {
          path: '/content/sqfw',
          name: 'SqfwChild',
          component: Sqfw
        },
        {
          path: '/content/tcdz',
          name: 'TcdzChild',
          component: Tcdz
        },
        {
          path: '/content/zygl',
          name: 'ZyglChild',
          component: Zygl
        }
      ]
    },
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
