import { Input, Checkbox, Button, Form } from 'antd';
import React from 'react';
import { IAuthRegister } from '../../../interfaces/auth.interface';
import { createUser } from '../../../actions/auth.action';
import { useNavigate } from 'react-router-dom';

const RegisForm = () => {
  const [form] = Form.useForm<IAuthRegister>();
  const navigate = useNavigate();

  const onFinish = async (values: IAuthRegister) => {
    try {
      await createUser(values);
      form.resetFields();
      navigate('/login');
    } catch (error: any) {
      console.error('Error creating user:', error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An unexpected error occurred';
      alert(errorMessage);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('password', e.target.value);
  };

  return (
    <Form<IAuthRegister> form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Full name"
        name="fullName"
        rules={[{ required: true, message: 'Please input your Full name!' }]}
      >
        <Input placeholder="Full name" />
      </Form.Item>

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

      <Form.Item
        name="policyAccept"
        valuePropName="checked"
        rules={[{ required: true, message: 'Please accept our policy' }]}
      >
        <Checkbox className="text-sm">
          By creating an account means you agree to the Terms and Conditions,
          and our Privacy Policy
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => navigate('/login')}
          className="w-full h-12 rounded-full text-white bg-[#BD8356] text-lg font-bold hover:!bg-[#A4734D] hover:!text-white hover:!border-[#BD8356] focus:!bg-[#9C6A4A] focus:!ring focus:!ring-[#BD8356] focus:!outline-none active:!bg-[#824F36] active:!scale-95 transition-all duration-150"
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisForm;
