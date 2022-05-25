import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Guide line sizes based on design which we have
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number): number =>
  PixelRatio.roundToNearestPixel((shortDimension / guidelineBaseWidth) * size);
export const verticalScale = (size: number): number =>
  PixelRatio.roundToNearestPixel((longDimension / guidelineBaseHeight) * size);
