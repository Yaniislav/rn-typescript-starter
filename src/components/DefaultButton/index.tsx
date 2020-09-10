import React, { useMemo, FC } from 'react';
import { View, Pressable, PressableProps } from 'react-native';
import DefaultText from 'components/DefaultText';

import styles from './styles';

interface IProps extends PressableProps {
  title: string;
  type?: 'fullfill' | 'outline';
  disabled?: boolean;
}

const DefaultButton: FC<IProps> = ({
  title,
  type,
  disabled,
  ...rest
}: IProps) => {
  const containerStyles = useMemo(() => {
    const stylesArray = [styles.container];

    if (type === 'outline') {
      stylesArray.push(styles.outline);
    }

    if (disabled) {
      stylesArray.push(styles.disabledButton);
    }
    return stylesArray;
  }, [type, disabled]);

  return (
    <Pressable {...rest}>
      <View style={containerStyles}>
        <DefaultText>{title}</DefaultText>
      </View>
    </Pressable>
  );
};

export default DefaultButton;
