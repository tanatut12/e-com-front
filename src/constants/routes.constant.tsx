import AuthContainer from '../containers/Auth/AuthContainer';
import LoginContainer from '../containers/login/LoginContainer';
import RegisterContainer from '../containers/register/RegisterContainer';

const routes = [
  { path: '/register', element: <RegisterContainer /> },
  { path: '/login', element: <LoginContainer /> },
  { path: '', element: <AuthContainer /> },
];

export default routes;
