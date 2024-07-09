export interface Users {
  id: string;
  email: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  avatar: string;
  posts: string[];
}
