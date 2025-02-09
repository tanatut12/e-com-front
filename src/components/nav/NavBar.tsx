import { Image, Input, Dropdown, } from 'antd';
import logo from '../../assets/svgs/logo-gradient.svg';
import React from 'react';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { AuthStore } from '../../store/authStore';

const NavBar: React.FC = () => {
  const { user,clear } = AuthStore();

  const handleSignOut = () => {
    clear()
  };

  const userMenu = {
    items: [
      {
        key: '1',
        label: (
          <div onClick={handleSignOut}>
            Sign Out
          </div>
        ),
      },
    ],
  };

  return (
    <div className='flex justify-center max-w-[1660px] mx-auto'>
    <div className="flex justify-between items-center w-full h-16 bg-white px-10 text-[#BD8356]">
      <div className="flex gap-4 items-center font-bold text-sm">
        <div className="flex gap-4 items-center">
          <Image preview={false} src={logo} alt="logo" className="h-10" />
          <p className="border-r-2 border-[#BD8356] text-xl pr-4">PUEY PUEY</p>
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="#" className='text-xl'>Home</a>
          </li>
          <li>
            <a href="#" className='text-xl'>Product</a>
          </li>
          <li>
            <a href="#" className='text-xl'>About Us</a>
          </li>
          <li>
            <a href="#" className='text-xl'>Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <Input
          size="large"
          placeholder="Search for anything . . ."
          prefix={<SearchOutlined className="text-[#BD8356]" />}
        />
        {!user?.token ? (
          <div className="flex gap-4 items-center w-20">
            <a href="/login" className=''>Sign In</a>
          </div>
        ) : (
          <Dropdown menu={userMenu} placement="bottomRight">
            <a href="#">
              <UserOutlined className="text-2xl" />
            </a>
          </Dropdown>
        )}
      </div>
    </div>
    </div>
  );
};

export default NavBar;
