import RNSensitiveInfo, {
  RNSensitiveInfoOptions,
} from 'react-native-sensitive-info';
import { Storage } from 'redux-persist/es/types';

const options: RNSensitiveInfoOptions = {
  keychainService: '',
  sharedPreferencesName: '',
};

export const SensitiveStorage: Storage = {
  setItem(key: string, value: any): any {
    return RNSensitiveInfo.setItem(key, value, options);
  },

  getItem(key: string): any {
    return RNSensitiveInfo.getItem(key, options);
  },

  removeItem(key: string): any {
    return RNSensitiveInfo.deleteItem(key, options);
  },
};
