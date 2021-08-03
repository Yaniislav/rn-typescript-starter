import React, { FC, ReactNode } from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import { Styles } from 'theme';

interface IProps extends KeyboardAwareScrollViewProps {
  children: ReactNode;
}

const resetScrollToCoords = {
  x: 0,
  y: 0,
};

const KeyboardAvoidingWrapper: FC<IProps> = ({ children, ...rest }: IProps) => (
  <KeyboardAwareScrollView
    contentContainerStyle={Styles.flex1}
    resetScrollToCoords={resetScrollToCoords}
    keyboardShouldPersistTaps={'handled'}
    {...rest}>
    {children}
  </KeyboardAwareScrollView>
);

export default KeyboardAvoidingWrapper;
