export interface Post {
  id: number;
  url: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  UserId: number;
  User: User;
}

export interface User {
  id: number;
  login: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
