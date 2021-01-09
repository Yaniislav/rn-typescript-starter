import { IFont, IFonts, IFontSize } from 'interfaces/theme';

const sizes: IFontSize = {
  base: 12,
  large: 16,
  small: 10,
};

const primary: IFont = {
  base: 'Helvetica',
  get light() {
    return `${this.base}-light`;
  },
  get bold() {
    return `${this.base}-bold`;
  },
};

export const Fonts: IFonts = {
  sizes,
  primary,
};
