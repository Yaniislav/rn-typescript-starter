import { createReducer } from '@reduxjs/toolkit';
import { didChangeLanguage, didLaunchApp } from '../actions';
import { IConfigState } from 'interfaces/config';

const initialState: IConfigState = {
  language: 'en',
  isFirstTimeLoaded: true,
  wasLanguageChangedInApp: false,
};

const configReducer = createReducer<IConfigState>(initialState, builder =>
  builder
    .addCase(didChangeLanguage, (state, { payload }) => {
      state.language = payload;
      state.wasLanguageChangedInApp = true;
    })
    .addCase(didLaunchApp, state => {
      state.isFirstTimeLoaded = true;
    }),
);

export default configReducer;
