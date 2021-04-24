import { defineConfig } from 'umi';
import routes from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  title: 'Mina',
  favicon: '/favicon.jpg',
  theme: {
    'primary-color': 'rgb(254, 97, 64)',
  },
});
