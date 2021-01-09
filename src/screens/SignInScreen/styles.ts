import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Metrics } from 'theme';

interface IStyles {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    paddingTop: Metrics.spacingHorizontalLarge,
    paddingHorizontal: Metrics.spacingHorizontalLarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: Metrics.spacingVerticalSmall,
  },
});

export default styles;
