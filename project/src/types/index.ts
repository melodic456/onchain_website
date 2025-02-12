export type User = {
  id: string;
  email: string;
  role: 'admin' | 'author' | 'user';
  created_at: string;
};