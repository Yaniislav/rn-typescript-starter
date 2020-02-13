import React, { useMemo, FC } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacityProperties,
  TouchableHighlightProperties,
  TouchableWithoutFeedbackProperties,
} from 'react-native';
import DefaultText from 'components/DefaultText';

import styles from './styles';

interface IProps
  extends TouchableOpacityProperties,
    TouchableHighlightProperties,
    TouchableWithoutFeedbackProperties {
  title: string;
  wrapperType?: 'opacity' | 'highLight' | 'clear';
  type?: 'fullfill' | 'outline';
  disabled?: boolean;
}

const DefaultButton: FC<IProps> = ({
  title,
  wrapperType,
  type,
  disabled,
  ...rest
}: IProps) => {
  const Wrapper = useMemo(() => {
    if (wrapperType === 'clear') {
      return TouchableWithoutFeedback;
    } else if (wrapperType === 'highLight') {
      return TouchableHighlight;
    }
    return TouchableOpacity;
  }, [wrapperType]);

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
    <Wrapper {...rest}>
      <View style={containerStyles}>
        <DefaultText>{title}</DefaultText>
      </View>
    </Wrapper>
  );
};

export default DefaultButton;
