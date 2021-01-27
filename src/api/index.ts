import axios from 'axios';
import { IUser, ILoginResponse } from '../interfaces/interface';

const loginApi = (payload: IUser) => {

  return axios.post<ILoginResponse>('');
};

const loadPostApi = (term: number) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

export {
    loadPostApi,
    loginApi
};