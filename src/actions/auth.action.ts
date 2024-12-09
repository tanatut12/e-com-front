import { IAuth, IAuthRegister } from '../interfaces/auth.interface';
import { fetch } from '../utils/fetch.util';

const url = 'auth';

export const getTestingMessage = (id: number) => {
  const method = 'GET';
  const path = `${url}/${id}`;

  return fetch<IAuth>(method, path);
};

export const createUser = (payload: IAuthRegister) => {
  const method = 'POST';
  const path = `${url}/register`;

  return fetch<IAuth>(method, path, payload);
};
