import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, Metrics } from 'theme';

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
    backgroundColor: Colors.background,
  },
  title: {
    marginBottom: Metrics.spacingVerticalLarge,
  },
  signUpButton: {
    marginTop: Metrics.spacingHorizontalMedium,
  },
});

export default styles;
