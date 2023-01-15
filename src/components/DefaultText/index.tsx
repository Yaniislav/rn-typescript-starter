import React, { ReactElement, ReactNode, useMemo } from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { styles } from './styles';
import { scale } from '../../utils/sizeScale';

interface IProps extends TextProps {
  style?: StyleProp<TextStyle>;
  type?: 'regular' | 'light' | 'bold' | 'book' | 'medium' | 'italic';
  children: ReactNode;
  fontSize?: number;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  color?: string;
  letterSpacing?: number;
}

const DefaultText = ({
  type = 'regular',
  fontSize,
  lineHeight,
  textAlign,
  color,
  style,
  children,
  letterSpacing,
  ...rest
}: IProps): ReactElement => {
  // will be implemented with custom fonts
  // const typeStyle = styles[type];

  const extraStyles = useMemo(() => {
    const styleObject: {
      lineHeight?: number;
      fontSize?: number;
      color?: string;
      letterSpacing?: number;
      textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
    } = {};
    if (lineHeight) {
      styleObject.lineHeight = scale(lineHeight);
    }
    if (fontSize) {
      styleObject.fontSize = scale(fontSize);
    }
    if (textAlign) {
      styleObject.textAlign = textAlign;
    }

    if (color) {
      styleObject.color = color;
    }
    if (letterSpacing) {
      styleObject.letterSpacing = letterSpacing;
    }

    return styleObject;
  }, [fontSize, lineHeight, color, textAlign, letterSpacing]);

  return (
    <Text {...rest} style={[styles.text, extraStyles, style]}>
      {children}
    </Text>
  );
};

export default DefaultText;
