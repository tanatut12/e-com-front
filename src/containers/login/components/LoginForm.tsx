import { Input, Button, Form, message } from 'antd';
import React from 'react';
import { IAuthLogin } from '../../../interfaces/auth.interface';
import { Login } from '../../../actions/auth.action';
import { useNavigate } from 'react-router-dom';
import { AuthStore } from '../../../store/authStore';

const LoginForm = () => {
  const {setAuth} = AuthStore()
  const [form] = Form.useForm<IAuthLogin>();
  const navigate = useNavigate();

  const onFinish = async (values: IAuthLogin) => {
    try {
      const {data} = await Login(values);
      setAuth({
        id:data.user.id,
        cartId:data.user.cartId,
        token:data.token,

      })
      form.resetFields();
      navigate('/');
    } catch (error) {
      console.error('Error login:', error);
      message.error('email or password is incorrect')
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('password', e.target.value);
  };

  return (
    <Form<IAuthLogin> form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Email or Phone Number"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Email or Phone number',
          },
        ]}
      >
        <Input placeholder="Email or Phone Number" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please input your Password' },
          {
            min: 8,
            message: 'Password must be at least 8 characters',
          },
        ]}
      >
        <Input.Password
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <p className="text-gray-400">Must be 8 characters at least</p>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full h-12 rounded-full text-white bg-[#BD8356] text-lg font-bold hover:!bg-[#A4734D] hover:!text-white hover:!border-[#BD8356] focus:!bg-[#9C6A4A] focus:!ring focus:!ring-[#BD8356] focus:!outline-none active:!bg-[#824F36] active:!scale-95 transition-all duration-150"
        >
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
