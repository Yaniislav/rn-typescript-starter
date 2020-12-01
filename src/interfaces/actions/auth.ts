import { IUser } from '../user';

export interface ITokenAction {
  accessToken?: string;
  refreshToken?: string;
}

export type IDidSignInAction = IUser & ITokenAction;

export interface ISignInAction {
  email: string;
  password: string;
}

export interface ISignUpAction extends ISignInAction {
  firstName: string;
  lastName: string;
}
