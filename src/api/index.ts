import axios from 'axios';

const loadPostApi = (term: number) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

export {
    loadPostApi
};