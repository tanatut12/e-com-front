import { IAuth } from '../interfaces/auth.interface';
import { fetch } from '../utils/fetch.util';

const url = 'auth';

export const getTestingMessage = (id: number) => {
  const method = 'GET';
  const path = `${url}/${id}`;

  return fetch<IAuth>(method, path);
};
