export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  profilepic: string;
  role: string;
  createdAt: string;
}

export interface Icontent {
  _id: string;
  title: string;
  description: string;
  midea: string;
  type: string;
}