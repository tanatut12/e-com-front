import appleLogin from '../../assets/svgs/apple-login.svg';
import { Button, Image } from 'antd';
import facebookLogin from '../../assets/svgs/facebook-login.svg';
import googleLogin from '../../assets/svgs/google-login.svg';
import IconNeko from '../../assets/svgs/icon-whiteneko.svg';
import LoginForm from './components/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen">
      <div
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #BD8356 0%, #794222 70%)',
        }}
        className="md:flex flex-col justify-center items-center w-1/2 hidden"
      >
        <div>
          <Image preview={false} src={IconNeko} alt="Logo" />
        </div>
        <div className="text-white text-7xl font-bold">
          <p>PUEY PUEY</p>
          <p className="text-center">DESIGN</p>
        </div>
        <div className="text-white text-xl mt-8">
          <p className="text-center">ตกแต่งความสุขของพวกเขา:</p>
          <p>ที่ซึ่งความสะดวกสบายมาพร้อมกับการกระดิกหาง!</p>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col md:min-w-[424px] min-w-[375px]">
          <div className="text-[#794222] flex flex-col gap-1 mb-14">
            <p className="text-3xl font-semibold">Welcome back!</p>
            <p className="text-xl">Meet the good taste today</p>
          </div>
          <LoginForm />
          <div>
            <p className="text-gray-400 text-center mb-8">
              or do it via other accounts
            </p>
            <div className="flex justify-center gap-8">
              <button>
                <Image preview={false} src={googleLogin} alt="Google login" />
              </button>
              <button>
                <Image preview={false} src={appleLogin} alt="Apple login" />
              </button>
              <button>
                <Image
                  preview={false}
                  src={facebookLogin}
                  alt="Facebook login"
                />
              </button>
            </div>
            <p className="text-center mt-14">
              Don't have an account?{' '}
              <Button onClick={() => navigate('/register')} type="text">
                Sign Up
              </Button>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
