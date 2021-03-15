import IRoutes from '../interfaces/route';
import Home from '../pages/views/Home';
import Results from '../pages/views/Results';
import Error404 from '../pages/views/Error404';

const routes: IRoutes[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/items',
    name: 'Search Results',
    component: Results,
    exact: true,
  },
  {
    path: '/items/:id',
    name: 'Item Detail',
    component: Results,
    exact: true,
  },
  {
    path: '/Error404',
    name: 'Empty Search',
    component: Error404,
    exact: true,
  },
]

export default routes;