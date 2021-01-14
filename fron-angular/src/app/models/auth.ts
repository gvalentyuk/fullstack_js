export interface User {
  name: string;
  email: string;
  id: string;
  isAdmin: boolean;
  cart: any;
  token: string;
}

export interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}
