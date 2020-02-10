import ISignInAction from './ISignInAction';

export default interface ISignUpAction extends ISignInAction {
  firstName: string;
  lastName: string;
}
