import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  title: TextStyle;
  signUpButton: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: scale(30),
  },
  signUpButton: {
    marginTop: scale(15),
  },
});

export default styles;
