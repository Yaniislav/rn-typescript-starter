import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Colors, Metrics } from 'theme';

interface IStyles {
  container: ViewStyle;
  outline: ViewStyle;
  slimContures: ViewStyle;
  disabledButton: ViewStyle;
  disabledTitle: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: Colors.green,
    height: Metrics.buttonHeight,
    width: Metrics.buttonWidth,
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: Colors.buttonBorder,
    borderWidth: Metrics.buttonBorder,
  },
  slimContures: {
    borderWidth: Metrics.slimBorder,
  },
  disabledButton: {
    borderColor: Colors.gray,
  },
  disabledTitle: {
    color: Colors.gray,
  },
});

export default styles;
