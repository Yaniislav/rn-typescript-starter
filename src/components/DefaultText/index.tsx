import React, { FC } from 'react';
import { Text, StyleProp, TextStyle, TextProps } from 'react-native';

import styles from './styles';

interface IProps extends TextProps {
  size?: 'small' | 'medium' | 'large';
  style?: StyleProp<TextStyle>;
  center?: boolean;
  children: string | typeof Text;
  type?: 'error' | 'info';
}

const getSizeStyles = (size: IProps['size']) => {
  if (size === 'small') {
    return styles.small;
  } else if (size === 'large') {
    return styles.large;
  } else return styles.medium;
};

const getTypeStyle = (type: IProps['type']) => {
  if (type === 'error') {
    return styles.errorType;
  }

  return null;
};

const DefaultText: FC<IProps> = ({
  children,
  size,
  style,
  center,
  type,
  ...rest
}: IProps) => {
  const sizeStyle = getSizeStyles(size);
  const typeStyle = getTypeStyle(type);

  return (
    <Text
      {...rest}
      style={[
        styles.text,
        style,
        sizeStyle,
        typeStyle,
        center ? styles.center : null,
      ]}>
      {children}
    </Text>
  );
};

export default DefaultText;
