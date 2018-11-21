import { isAbsolute } from 'path';

const Layout = () => import ('@/components/Layout/Layout.vue')
const pic = () => import ('@/views/pic.vue')
const about = () => import ('@/views/about.vue')
const blog = () => import ('@/views/blog.vue')
const education = () => import ('@/views/education.vue')
const skills = () => import ('@/views/skills.vue')
const interests = () => import ('@/views/interests.vue')
const awards = () => import ('@/views/awards.vue')

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
        path: '/education',
        name: 'education',
        component: education,
        meta: {
          title: 'education'
        }
      },
      {
        path: '/skills',
        name: 'skills',
        component: skills,
        meta: {
          title: 'skills'
        }
      },
      {
        path: '/interests',
        name: 'interests',
        component: interests,
        meta: {
          title: 'interests'
        }
      },
      {
        path: '/awards',
        name: 'awards',
        component: awards,
        meta: {
          title: 'awards'
        }
      },
    ]
  }
]