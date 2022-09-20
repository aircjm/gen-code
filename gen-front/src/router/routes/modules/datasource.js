import Layout from '@/layout/index.vue'

export default [
  {
    name: 'Example',
    path: '/datasource',
    component: Layout,
    redirect: '/datasource/table',
    meta: {
      title: '组件示例',
      role: ['admin'],
      icon: 'mdi:menu',
    },
    children: [
      {
        name: 'Table',
        path: 'table',
        component: () => import('@/views/datasource/table/index.vue'),
        redirect: '/datasource/table/post',
        meta: {
          title: '表格',
          role: ['admin'],
          icon: 'mdi:table',
        },
        children: [
          {
            name: 'PostList',
            path: 'post',
            component: () => import('@/views/datasource/table/post/index.vue'),
            meta: {
              title: '数据源列表',
              role: ['admin'],
            },
          },
          {
            name: 'PostCreate',
            path: 'post-create',
            component: () => import('@/views/datasource/table/post/PostCreate.vue'),
            meta: {
              title: '创建数据源',
              role: ['admin'],
            },
          },
        ],
      },
    ],
  },
]
