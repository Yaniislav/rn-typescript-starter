import React, { FC, ReactNode } from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

interface IProps extends KeyboardAwareScrollViewProps {
  children: ReactNode;
}

const KeyboardAvoidingWrapper: FC<IProps> = ({ children, ...rest }: IProps) => (
  <KeyboardAwareScrollView
    contentContainerStyle={styles.container}
    resetScrollToCoords={{ x: 0, y: 0 }}
    keyboardShouldPersistTaps={'handled'}
    {...rest}>
    {children}
  </KeyboardAwareScrollView>
);

export default KeyboardAvoidingWrapper;
