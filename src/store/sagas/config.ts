import { all, takeLatest, select, put } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { configSelector } from '../selectors';
import { getCurrentLanguage, initI18n } from 'localization';
import { didChangeLanguage, didLaunchApp } from 'store/actions';
import { IConfigState } from 'interfaces/config';

function* languageConfigSaga(): Generator {
  const {
    language,
    isFirstTimeLoaded,
    wasLanguageChangedInApp,
  } = (yield select(configSelector)) as IConfigState;

  if (!wasLanguageChangedInApp) {
    const locale = getCurrentLanguage();
    initI18n(locale);
    yield put(didChangeLanguage(locale));
  } else {
    initI18n(language);
  }

  if (!isFirstTimeLoaded) {
    yield put(didLaunchApp());
  }
}

export default function* configSagas(): Generator {
  yield all([takeLatest(REHYDRATE, languageConfigSaga)]);
}
