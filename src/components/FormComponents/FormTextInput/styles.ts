import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Metrics } from 'theme';
import { scale } from '../../../utils/sizeScale';

interface IStyle {
  container: ViewStyle;
  textInputContainer: ViewStyle;
  inputStyle: TextStyle;
  errorContainer: ViewStyle;
}

const ERROR_CONTAINER_HEIGHT = scale(15);

const styles = StyleSheet.create<IStyle>({
  container: {
    alignSelf: 'stretch',
    height: Metrics.baseInputHeight,
    alignItems: 'stretch',
    marginBottom: Metrics.spacingVerticalMedium,
  },
  textInputContainer: {
    borderColor: '#ccc',
    borderWidth: Metrics.slimBorder,
    borderRadius: scale(10),
    alignItems: 'stretch',
    marginBottom: Metrics.spacingVerticalSmall / 2,
    justifyContent: 'center',
    paddingHorizontal: Metrics.spacingHorizontalSmall,
    height: scale(50),
  },
  inputStyle: {
    flex: 1,
  },
  errorContainer: {
    height: Metrics.baseInputHeight - ERROR_CONTAINER_HEIGHT,
    paddingHorizontal: Metrics.spacingHorizontalSmall,
  },
});

export default styles;
