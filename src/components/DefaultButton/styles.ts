import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  outline: ViewStyle;
  slimContures: ViewStyle;
  disabledButton: ViewStyle;
  disabledTitle: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: 'green',
    height: verticalScale(48),
    width: scale(230),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: 'green',
    borderWidth: scale(3),
  },
  slimContures: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  disabledButton: {
    borderColor: 'gray',
  },
  disabledTitle: {
    color: 'gray',
  },
});

export default styles;
