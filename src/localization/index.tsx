import { NativeModules, Platform } from 'react-native';
import { initReactI18next } from 'react-i18next';
import I18n from 'i18next';

import en from './en.json';
import ar from './ar.json';

export const getCurrentLanguage = (): string => {
  let locale: string =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  if (locale === undefined && Platform.OS === 'ios') {
    locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    return locale || 'en';
  }

  return locale ? locale.substring(0, 2) : 'en';
};

export const initI18n = (lng: string): void => {
  I18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en,
        ar,
      },
      lng,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
};
