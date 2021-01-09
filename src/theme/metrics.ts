import { verticalScale, scale } from 'react-native-size-matters';
import { PixelRatio, StyleSheet } from 'react-native';

export const Metrics = {
  navBarHeight: verticalScale(50),

  // buttons
  buttonHeight: verticalScale(45),
  buttonWidth: scale(230),

  // inputs
  baseInputHeight: scale(65),

  // borders
  slimBorder: StyleSheet.hairlineWidth,
  buttonBorder: PixelRatio.roundToNearestPixel(scale(3)),

  // spacings
  spacingVerticalSmall: verticalScale(10),
  spacingVerticalMedium: verticalScale(15),
  spacingVerticalLarge: verticalScale(20),
  spacingHorizontalSmall: scale(10),
  spacingHorizontalMedium: scale(15),
  spacingHorizontalLarge: scale(20),
};
