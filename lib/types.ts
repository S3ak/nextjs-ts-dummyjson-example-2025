export interface PostResponse {
  limit: number;
  posts: Post[];
  skip: number;
  total: number;
}

export interface Post {
  body: string;
  id: number;
  reactions: Reactions;
  tags: string[];
  title: string;
  userId: number;
  views: number;
}

export interface Reactions {
  dislikes: number;
  likes: number;
}
