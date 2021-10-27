import { makeAutoObservable } from 'mobx';

import service from './PostStore.service';
import { Post } from '../../data/posts';

class PostStore {
  posts: Post[] = [];

  isLoading = true;

  isError = false;

  constructor() {
    makeAutoObservable(this);
    service.getUsersData()
      .then((users) => {
        this.posts = users;
        this.isLoading = false;
      })
      .catch(() => {
        this.isError = true;
      });
  }
}

export default new PostStore();
