import { defineConfig } from 'umi';
import routes from './config/router';
console.log(routes, 'routes');
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  theme: {
    'primary-color': 'rgb(254, 97, 64)',
  },
});
