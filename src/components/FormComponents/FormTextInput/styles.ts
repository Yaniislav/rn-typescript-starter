import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';

interface IStyle {
  container: ViewStyle;
  textInputContainer: ViewStyle;
  inputStyle: TextStyle;
  errorContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyle>({
  container: {
    alignSelf: 'stretch',
    height: scale(65),
    alignItems: 'stretch',
    marginBottom: scale(15),
  },
  textInputContainer: {
    borderColor: '#ccc',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: scale(10),
    alignItems: 'stretch',
    marginBottom: scale(5),
    justifyContent: 'center',
    paddingHorizontal: scale(10),
    height: scale(50),
  },
  inputStyle: {
    flex: 1,
  },
  errorContainer: {
    height: scale(15),
    paddingHorizontal: scale(10),
  },
});

export default styles;
