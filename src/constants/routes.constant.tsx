import AuthContainer from '../containers/Auth/AuthContainer';
import RegisterContainer from '../containers/register/RegisterContainer';

const routes = [
  { path: '/register', element: <RegisterContainer /> },
  { path: '', element: <AuthContainer /> },
];

export default routes;
