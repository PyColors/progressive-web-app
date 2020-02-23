import { Route } from '../../interfaces/route.interface';
import Home from '../../views/home';
import Navigation1 from '../../views/navigation-1';
import Navigation2 from '../../views/navigation-2';
import Navigation3 from '../../views/navigation-3';
import Navigation4 from '../../views/navigation-4';
import Navigation5 from '../../views/navigation-5';
import Navigation6 from '../../views/navigation-6';

export const routes: Route[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/navigation-1',
    exact: true,
    component: Navigation1,
  },
  {
    path: '/navigation-2',
    exact: true,
    component: Navigation2,
  },
  {
    path: '/navigation-3',
    exact: true,
    component: Navigation3,
  },
  {
    path: '/navigation-4',
    exact: true,
    component: Navigation4,
  },
  {
    path: '/navigation-5',
    exact: true,
    component: Navigation5,
  },
  {
    path: '/navigation-6',
    exact: true,
    component: Navigation6,
  },
];
