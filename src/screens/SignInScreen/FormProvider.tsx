import React, { ReactChild } from 'react';
import { Formik, FormikProps } from 'formik';
import { object, string } from 'yup';

import ISignInAction from 'store/actions/auth/ISignInAction';

const SignInSchema = object().shape({
  email: string()
    .email('Invalid email')
    .required(),
  password: string()
    .required()
    .min(6)
    .max(15),
});

const initialValues: ISignInAction = {
  email: '',
  password: '',
};

export interface ISignInFormProps {
  onSubmit: (values: ISignInAction) => void;
  children?: (values: FormikProps<ISignInAction>) => ReactChild;
}

const FormProvider: React.FunctionComponent<ISignInFormProps> = ({
  children,
  onSubmit,
}: ISignInFormProps) => {
  return (
    <Formik
      validationSchema={SignInSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}>
      {children}
    </Formik>
  );
};

export default FormProvider;
