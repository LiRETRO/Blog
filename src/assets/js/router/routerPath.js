const Layout = () => import ('@/components/Layout/Layout.vue')

export default [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    meta: {
      title: '主页'
    },
    childrens: [
    ]
  }
]