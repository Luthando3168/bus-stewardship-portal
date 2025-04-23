
export type AuthUser = {
  id: string;
  email: string;
  role: string;
};

export type Session = {
  user: AuthUser | null;
};
