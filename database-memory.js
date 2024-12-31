import { randomUUID } from 'crypto'

export class DatabaseMemory {
  #posts = new Map()

    create(posts) 
    {
      const postsId = randomUUID();

      this.#posts.set(postsId, posts);
    }
}