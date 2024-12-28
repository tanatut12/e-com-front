import appleStore from '../../assets/pngs/appstore.png';
import googleStore from '../../assets/pngs/googleplay.png';
import { Image } from 'antd';

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center h-[412px] w-full px-[150px] bg-[#BD8356] text-white">
      <div className="flex font-medium text-2xl pt-8 w-full">Sweetdeli</div>
      <div className="flex justify-around w-full">
        <div>
          <p>Contact us</p>
          <p>sweetdeli@gmail.com</p>
          <p>+1-2345-6789</p>
          <p>123 Ave, New York, USA</p>
        </div>
        <div>
          <p>Products</p>
          <p>Auctor volutpat.</p>
          <p>Fermentum turpis.</p>
          <p>Mi consequat.</p>
          <p>Amet venenatis.</p>
          <p>Convallis porttitor.</p>
        </div>
        <div>
          <p>About</p>
          <p>Egestas vitae.</p>
          <p>Viverra lorem ac.</p>
          <p>Eget ac tellus.</p>
          <p>Erat nulla.</p>
          <p>Vulputate proin.</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Get the app</p>
          <Image preview={false} src={appleStore} alt="apple store" />
          <Image preview={false} src={googleStore} alt="google store" />
        </div>
      </div>
      <div className="flex justify-end w-full pb-4">
        <p>Copyright © 2020. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
