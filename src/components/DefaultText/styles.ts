import { StyleSheet, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';

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
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: scale(17),
  },
  small: {
    fontSize: scale(14),
  },
  medium: {
    fontSize: scale(17),
  },
  large: {
    fontSize: scale(24),
  },
  center: {
    textAlign: 'center',
  },
  errorType: {
    color: 'red',
  },
});

export default styles;
