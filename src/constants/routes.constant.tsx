import AuthContainer from '../containers/Auth/AuthContainer';
import LayoutScreen from '../containers/Layout/LayoutScreen';
import RegisterContainer from '../containers/register/RegisterContainer';

const routes = [
  { path: '/register', element: <RegisterContainer /> },
  {
    path: '',
    element: <LayoutScreen />,
    children: [{ path: '/', element: <AuthContainer /> }],
  },
];

export default routes;
