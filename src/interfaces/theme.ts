// fonts
export interface IFontSize {
  base: number;
  small: number;
  large: number;
}

export interface IFont {
  base: string;
  bold: string;
  light: string;
}

export interface IFonts {
  primary: IFont;
  secondary?: IFont;
  sizes: IFontSize;
}
