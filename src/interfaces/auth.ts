import { IUser } from './user';

export interface IDidSignInAction extends IUser {
  accessToken: string;
  refreshToken: string;
}

export interface IDidUpdateTokenAction {
  accessToken?: string;
  refreshToken?: string;
}

export interface ISignInAction {
  email: string;
  password: string;
}

export interface ISignUpAction extends ISignInAction {
  firstName: string;
  lastName: string;
}

// reducer
export interface IAuthState {
  accessToken?: string;
  refreshToken?: string;
}
