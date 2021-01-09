import React, { useMemo, FC } from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';
import DefaultText from 'components/DefaultText';

import styles from './styles';

interface IProps extends PressableProps {
  title: string;
  type?: 'fulfill' | 'outline';
  disabled?: boolean;
  style?: ViewStyle;
}

const DefaultButton: FC<IProps> = ({
  title,
  type,
  disabled,
  style,
  ...rest
}: IProps) => {
  const containerStyles = useMemo(() => {
    const stylesArray: Array<ViewStyle | undefined> = [styles.container];

    if (type === 'outline') {
      stylesArray.push(styles.outline);
    }

    if (disabled) {
      stylesArray.push(styles.disabledButton);
    }

    stylesArray.push(style);

    return stylesArray;
  }, [type, disabled, style]);

  return (
    <Pressable {...rest} style={containerStyles}>
      <DefaultText>{title}</DefaultText>
    </Pressable>
  );
};

export default DefaultButton;
