import { StyleSheet, TextStyle } from 'react-native';
import { Fonts, Colors } from 'theme';

interface IStyles {
  fontStyle: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  fontStyle: {
    fontFamily: Fonts.primary.base,
    fontSize: Fonts.sizes.base,
    color: Colors.text,
  },
});

export default styles;
