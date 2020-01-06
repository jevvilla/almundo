import React from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Router from './navigation';
import {colors} from 'src/common/styles';

const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
