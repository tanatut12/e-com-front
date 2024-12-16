import NavBar from '../../components/nav/NavBar';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const LayoutScreen = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutScreen;
