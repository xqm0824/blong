import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Main from '@/components/main'
import Home from '@/components/home'
import store from '@/store/index.js'
import ArticleDetail from '@/components/article-detail'
import Comments from "@/components/comments"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: 'home',
          component: Home
        },
        {
          path: '/article-detail',
          name: 'article-detail',
          component: ArticleDetail
        },

      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})


router.beforeEach((to, from, next) => {
  if (to.path === "/home") {
    next()
  }
  if (store.state.hasLogin) {
      next()
  } else {
    next()
  }
})
export default router