export type User = {
  id: number;
  username: string;
  email: string;
};

export type Todo = {
  id: number;
  todo: string;
  complete: boolean;
  user_id: number;
  category: string;
};
