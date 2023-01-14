import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../theme';


export const styles = StyleSheet.create({
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

