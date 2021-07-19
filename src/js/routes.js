import { PATH } from '@constants';
import Home from '@pages/Home';
import Error404 from '@pages/errors/Error404';

const routes = [
  {
    path: PATH.home,
    exact: true,
    component: Home
  },
  {
    path: PATH.notfound,
    exact: true,
    component: Error404
  }
];

export default routes;
