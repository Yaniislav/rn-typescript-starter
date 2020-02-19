import React, { ReactElement, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { StackParamList } from 'navigation';
import DefaultText from 'components/DefaultText';
import DefaultButton from 'components/DefaultButton';
import styles from './styles';
import { useTranslation } from 'react-i18next';

export type WelcomeScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Welcome'>;
  route: RouteProp<StackParamList, 'Welcome'>;
};

const namespaces = ['welcomeScreen', 'buttons'];

const WelcomeScreen = ({ navigation }: WelcomeScreenProps): ReactElement => {
  const { t } = useTranslation(namespaces);

  const onSignInPress = useCallback(() => {
    navigation.push('SignIn');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <DefaultText style={styles.title} size="large">
        {t('title')}
      </DefaultText>
      <DefaultButton title={t('buttons:signin')} onPress={onSignInPress} />
      <DefaultButton
        style={styles.signUpButton}
        title={t('buttons:signup')}
        type="outline"
      />
    </View>
  );
};

export default WelcomeScreen;
