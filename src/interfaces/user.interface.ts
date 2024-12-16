export interface IUser {
  id: number;
  fullName: string;
  username: string;
  password: string;
  policyAccept: boolean;
  cartId: number;
}

export interface IUserLogin extends Pick<IUser, 'id' | 'username' | 'cartId'> {}
