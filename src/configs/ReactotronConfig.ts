import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const pluginConfig = {
  except: [],
};

let reactotron: any;

if (__DEV__) {
  reactotron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin(pluginConfig))
    .connect();

  // console decorators settings
  const oldLog = console.log;
  console.log = (...args: any) => {
    oldLog(...args);
    if (reactotron.log) {
      reactotron.log(...args);
    }
  };

  const oldWarn = console.warn;
  console.warn = (...args: any) => {
    oldWarn(...args);
    if (reactotron.warn) {
      reactotron.warn(args);
    }
  };

  const oldError = console.error;
  console.error = (message: string, ...stack: any) => {
    oldError(message, ...stack);
    if (reactotron.error) {
      reactotron.error(message, stack);
    }
  };
}

export default reactotron;
