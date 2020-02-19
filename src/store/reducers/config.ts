import { createReducer } from 'redux-act';
import { didChangeLanguage, didLaunchApp } from '../actions';

export interface IConfig {
  language: string;
  isFirstTimeLoaded: boolean;
  wasLanguageChangedInApp: boolean;
}

const initialState: IConfig = {
  language: 'en',
  isFirstTimeLoaded: true,
  wasLanguageChangedInApp: false,
};

const configReducer = createReducer<IConfig>({}, initialState);

configReducer.on(didChangeLanguage, (state, payload) => ({
  ...state,
  language: payload,
  wasLanguageChangedInApp: true,
}));

configReducer.on(didLaunchApp, state => ({
  ...state,
  isFirstTimeLoaded: true,
}));

export default configReducer;
