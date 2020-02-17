import { StyleSheet, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';

interface IStyles {
  fontStyle: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  fontStyle: {
    fontSize: scale(14),
    color: 'black',
  },
});

export default styles;
