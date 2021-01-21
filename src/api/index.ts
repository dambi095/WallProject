import axios from 'axios';

const loginApi = () => {
  return axios.post('');
};

const loadPostApi = (term: number) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

export {
    loadPostApi,
    loginApi
};