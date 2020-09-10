import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ISignInAction } from 'interfaces/auth';
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
