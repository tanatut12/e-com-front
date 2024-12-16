import AuthContainer from '../containers/Auth/AuthContainer';
import LayoutScreen from '../containers/Layout/LayoutScreen';
import LoginContainer from '../containers/login/LoginContainer';
import RegisterContainer from '../containers/register/RegisterContainer';

const routes = [
  { path: '/register', element: <RegisterContainer /> },
  { path: '/login', element: <LoginContainer /> },
  {
    path: '',
    element: <LayoutScreen />,
    children: [{ path: '/', element: <AuthContainer /> }],
  },
];

export default routes;
