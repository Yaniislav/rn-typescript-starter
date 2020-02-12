import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: scale(20),
  },
  small: {
    fontSize: scale(14),
  },
  medium: {
    fontSize: scale(24),
  },
  large: {
    fontSize: scale(30),
  },
  center: {
    textAlign: 'center',
  },
  errorType: {
    color: 'red',
  },
});

export default styles;
