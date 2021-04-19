export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        component: '@/pages/home',
      },
      {
        path: '/ecology',
        title: '生态',
        component: '@/pages/ecology',
      },
      // {
      //   path: '/news',
      //   title: '新闻',
      //   component: '@/pages/news',
      // }, {
      //   path: '/video',
      //   title: '视频',
      //   component: '@/pages/video',
      // }, {
      //   path: '/tool',
      //   title: '工具',
      //   component: '@/pages/tool',
      // }, {
      //   path: '/case',
      //   title: '案例',
      //   component: '@/pages/case',
      // }
    ],
  },
];
