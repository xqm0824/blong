import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'
import Home from '@/components/home'
import store from '@/store/index.js'
import ArticleDetail from '@/components/article-detail'
import PublishArticle from "@/components/publish-article"
import Personal from "@/components/personal"
import User from "@/components/user"
import Userface from "@/components/userface"


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
        {
          path: '/personal',
          name: 'personal',
          component: Personal,
          children: [
            {
              path: "/user",
              name: 'user',
              component: User,
              meta: {
                tipShow: false
              }
            },
            {
              path: "/article",
              name: 'article',
              component: User,
              meta: {
                tipShow: false
              }
            },
            {
              path: "comment",
              name: 'comment',
              component: User,
              meta: {
                tipShow: false
              }
            },
            {
              path: "userface",
              name: 'userface',
              component: Userface,
              meta: {
                tipShow: false
              }
            },
          ]
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