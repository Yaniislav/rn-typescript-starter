import React, { ReactElement, useCallback } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from 'navigation';
import DefaultText from 'components/DefaultText';
import DefaultButton from 'components/DefaultButton';
import styles from './styles';
import Routes from '../../navigation/routes';

export type WelcomeScreenProps = {
  navigation: StackNavigationProp<StackParamList, Routes.Welcome>;
  route: RouteProp<StackParamList, Routes.Welcome>;
};

const WelcomeScreen = ({ navigation }: WelcomeScreenProps): ReactElement => {
  const onSignInPress = useCallback(() => {
    navigation.push(Routes.SignIn);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <DefaultText style={styles.title} size="large">
        Welcome to Starter
      </DefaultText>
      <DefaultButton title={'Sign In'} onPress={onSignInPress} />
      <DefaultButton
        style={styles.signUpButton}
        title={'Sign Up'}
        type="outline"
      />
    </View>
  );
};

export default WelcomeScreen;
