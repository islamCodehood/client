export interface AppState {
  posts: PostTypes[]; 
}

export interface PostTypes {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  comments: Comment[];
  votes: Vote[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export interface Vote {
  postId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  voteValue: number;
}

export interface AppProps {
	postItem?: PostTypes;
	comment?: Comment;
}