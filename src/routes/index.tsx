import { createBrowserRouter } from 'react-router-dom';
import routes from '../constants/routes.constant';

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes);
