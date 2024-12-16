import { Image, Input } from 'antd';
import logo from '../../assets/svgs/logo-gradient.svg';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 bg-white px-10 text-[#BD8356]">
      <div className="flex gap-4 items-center font-bold text-sm">
        <div className="flex gap-4 items-center">
          <Image preview={false} src={logo} alt="logo" className="h-10" />
          <p className="border-r-2 border-[#BD8356] text-sm pr-4">PUEY PUEY</p>
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-cente">
        <Input
          size="large"
          placeholder="Search for anything . . ."
          prefix={<SearchOutlined className="text-[#BD8356]" />}
        />
        <div className="flex gap-4 items-center w-20">
          <a href="#">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
