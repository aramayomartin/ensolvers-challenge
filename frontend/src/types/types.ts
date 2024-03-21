export interface Category {
  id: number;
  name: string;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  categories: Category[];
  archived: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserSession{
  user: User;
  token: string;
}