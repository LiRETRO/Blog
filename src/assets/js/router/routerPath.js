import { isAbsolute } from 'path';

const Layout = () => import ('@/components/Layout/Layout.vue')
const about = () => import ('@/views/about.vue')
const experience = () => import ('@/views/experience.vue')
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
        path: '/about',
        name: 'about',
        component: about,
        meta: {
          title: '关于'
        }
      },
      {
        path: '/experience',
        name: 'experience',
        component: experience,
        meta: {
          title: '经验'
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