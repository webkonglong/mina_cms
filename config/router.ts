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
        component: '@/pages/ecology',
      },
      {
        path: '/news',
        component: '@/pages/news',
      },
      {
        path: '/news-details',
        component: '@/pages/news/details',
      },
      {
        path: '/video',
        component: '@/pages/video',
      },
      {
        path: '/play',
        component: '@/pages/video/play',
      },
      {
        path: '/tool',
        component: '@/pages/tool',
      },
      {
        path: '/case',
        component: '@/pages/case',
      },
      {
        path: '/case-details',
        component: '@/pages/case/details',
      },
    ],
  },
];
