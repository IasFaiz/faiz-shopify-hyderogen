import {type RouteConfig} from '@react-router/dev/routes';
import {hydrogenRoutes} from '@shopify/hydrogen';

export default [
  {
    path: '/',
    file: 'routes/home.tsx',
  },
  {
    path: '/projects',
    file: 'routes/projects.tsx',
  },
  {
    path: '/studio',
    file: 'routes/studio.tsx',
  },
  {
    path: '/about',
    file: 'routes/about.tsx',
  },
  {
    path: '/journal',
    file: 'routes/journal.tsx',
  },
  {
    path: '/contact',
    file: 'routes/contact.tsx',
  },
  // Manual route definitions can be added to this array, in addition to or instead of using the `flatRoutes` file-based routing convention.
  // See https://reactrouter.com/api/framework-conventions/routes.ts#routests
] satisfies RouteConfig;
