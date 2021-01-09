import { StyleSheet, TextStyle } from 'react-native';
import { Fonts, Colors } from '../../theme';

interface IStyles {
  text: TextStyle;
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
  center: TextStyle;
  errorType: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  text: {
    fontFamily: Fonts.primary.base,
    fontWeight: '400',
    fontSize: Fonts.sizes.base,
  },
  small: {
    fontSize: Fonts.sizes.small,
  },
  medium: {
    fontSize: Fonts.sizes.base,
  },
  large: {
    fontSize: Fonts.sizes.large,
  },
  center: {
    textAlign: 'center',
  },
  errorType: {
    color: Colors.errorText,
  },
});

export default styles;
