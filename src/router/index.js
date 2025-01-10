import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/mainPage.vue'
import NpcList from '../components/hezhong/NpcList.vue'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/hezhong',
    component: () => import('../components/hezhong/hezhongtianwang.vue'),
    children: [
      {
        path: '',
        component: NpcList
      },
      {
        path: '式美',
        component: () => import('../components/hezhong/式美.vue')
      },
      {
        path: '基玛',
        component: () => import('../components/hezhong/基玛.vue')
      },
      {
        path: '卡特莉亚',
        component: () => import('../components/hezhong/卡特莉亚.vue')
      },
      {
        path: '练武',
        component: () => import('../components/hezhong/练武.vue')
      },
      {
        path: '阿迪克',
        component: () => import('../components/hezhong/阿迪克.vue')
      }
    ]
  },
  {
    path: '/fengyuan',
    component: () => import('../components/fengyuan/fengyuantianwang.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/fengyuan/NpcList.vue')
      },
      {
        path: '花月',
        component: () => import('../components/fengyuan/花月.vue')
      },
      {
        path: '芙蓉',
        component: () => import('../components/fengyuan/芙蓉.vue')
      },
      {
        path: '波妮',
        component: () => import('../components/fengyuan/波妮.vue')
      },
      {
        path: '源治',
        component: () => import('../components/fengyuan/源治.vue')
      },
      {
        path: '米可利',
        component: () => import('../components/fengyuan/米可利.vue')
      }
    ]
  },
  {
    path: '/guandu',
    component: () => import('../components/guandu/guandutianwang.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/guandu/NpcList.vue')
      },
      {
        path: '科拿',
        component: () => import('../components/guandu/科拿.vue')
      },
      {
        path: '希巴',
        component: () => import('../components/guandu/希巴.vue')
      },
      {
        path: '菊子',
        component: () => import('../components/guandu/菊子.vue')
      },
      {
        path: '渡',
        component: () => import('../components/guandu/渡.vue')
      },
      {
        path: '小茂',
        component: () => import('../components/guandu/小茂.vue')
      }
    ]
  },
  {
    path: '/shenao',
    component: () => import('../components/shenao/shenaotianwang.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
