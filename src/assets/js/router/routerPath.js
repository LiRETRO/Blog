import { isAbsolute } from 'path'

const Layout = () => import ('@/components/Layout/Layout.vue')
const PublishBlog = () => import ('@/components/Layout/PublishBlog.vue')
const pic = () => import ('@/views/pic.vue')
const about = () => import ('@/views/about.vue')
const blog = () => import ('@/views/blog/blog.vue')
const blogDetail = () => import ('@/views/blog/blogDetail.vue')
const picture = () => import ('@/views/picture.vue')
const login = () => import ('@/views/login.vue')
const register = () => import ('@/views/register.vue')

export default [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    meta: {
      title: '主页'
    },
    children: [
      {
        path: '/',
        name: 'Index',
        component: pic,
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
        path: '/blog',
        name: 'blog',
        component: blog,
        meta: {
          title: '博客'
        }
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
        path: '/picture',
        name: 'picture',
        component: picture,
        meta: {
          title: 'picture'
        }
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
      },
    ]
  }
]