import { isAbsolute } from 'path'

const Hello = () => import ('@/components/HelloWorld.vue')
const Layout = () => import ('@/components/Layout/Layout.vue')
const NotFound = () => import ('@/components/NotFound.vue')
const Home = () => import ('@/components/Home.vue')
const PublishBlog = () => import ('@/components/Layout/PublishBlog.vue')
const about = () => import ('@/views/about.vue')
const blog = () => import ('@/views/blog/blog.vue')
const blogDetail = () => import ('@/views/blog/blogDetail.vue')
const blogPreview = () => import ('@/views/blog/blogPreview.vue')
const login = () => import ('@/views/userAction/login.vue')
const register = () => import ('@/views/userAction/register.vue')

export default [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
    redirect: '/home',
    meta: {
      title: '欢迎'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    meta: {
      title: '主页'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: '主页'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: about,
        meta: {
          title: '关于'
        }
      },
      {
        path: '/archive',
        name: 'archive',
        component: blog,
        meta: {
          title: '博客'
        },
        props: true
      },
      {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
          title: '登陆'
        }
      },
      {
        path: '/register',
        name: 'register',
        component: register,
        meta: {
          title: '注册'
        }
      },
      {
        path: '/publishBlog',
        name: 'privatePublish',
        component: PublishBlog,
        meta: {
          title: '发布博客'
        }
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'blogDetail',
    component: blogDetail,
    meta: {
      title: '正文'
    }
  },
  {
    path: '/preview',
    name: 'blogPreview',
    component: blogPreview,
    props: true
  }
]