import React, { FC, useMemo } from 'react';
import { Text, StyleProp, TextStyle, TextProperties } from 'react-native';

import styles from './styles';

interface IProps extends TextProperties {
  size?: 'small' | 'medium' | 'large';
  style?: StyleProp<TextStyle>;
  center?: boolean;
  children: string | typeof Text;
  type?: 'error' | 'info';
}

const DefaultText: FC<IProps> = ({
  children,
  size,
  style,
  center,
  type,
  ...rest
}: IProps) => {
  const sizeStyle = useMemo(() => {
    if (size === 'small') {
      return styles.small;
    } else if (size === 'large') {
      return styles.large;
    } else return styles.medium;
  }, [size]);

  const typeStyle = useMemo(() => {
    if (type === 'error') {
      return styles.errorType;
    }

    return null;
  }, [type]);

  const alignmentStyle = useMemo(() => (center ? styles.center : null), [
    center,
  ]);

  return (
    <Text
      {...rest}
      style={[styles.text, style, sizeStyle, alignmentStyle, typeStyle]}>
      {children}
    </Text>
  );
};

export default DefaultText;
