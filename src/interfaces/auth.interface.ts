import { IUserLogin } from './user.interface';

export interface IAuth {
  testingMessage: string;
  testingNumber: number;
}

export interface IAuthRegister {
  fullName: string;
  username: string;
  password: string;
  policyAccept: boolean;
}

export interface IAuthLogin
  extends Pick<IAuthRegister, 'username' | 'password'> {}

export interface IAuthLoginReturn {
  message: string;
  token: string;
  user: IUserLogin;
}
