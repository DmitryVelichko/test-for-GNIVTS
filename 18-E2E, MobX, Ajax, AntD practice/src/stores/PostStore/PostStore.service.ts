import axios from 'axios';

import { Post } from '../../data/posts';

const service = {
  getUsersData(): Promise<Post[]> {
    return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.data);
  },
};

export default service;
