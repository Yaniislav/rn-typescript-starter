import { createAction } from 'redux-act';

export const didChangeLanguage = createAction<string>('Did change language');
export const didLaunchApp = createAction<void>('Did Launch App');
