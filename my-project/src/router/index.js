import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'
import Home from '@/components/home'
import store from '@/store/index.js'
import ArticleDetail from '@/components/article-detail'
import PublishArticle from "@/components/publish-article"



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
        {
          path: '/publish-article',
          name: 'publish-article',
          component: PublishArticle
        },
      ]
    }
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