import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import ISignInAction from 'store/actions/auth/ISignInAction';
import { signInAction } from 'store/actions';
import SignIn from './SignIn';

const SignInScreen = (): ReactElement => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (values: ISignInAction) => {
      dispatch(signInAction(values));
    },
    [dispatch],
  );

  return <SignIn onSubmit={onSubmit} />;
};

export default SignInScreen;
