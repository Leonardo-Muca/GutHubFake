import React, { useEffect } from 'react';

import { NativeBaseProvider } from 'native-base';
import SplashScreen from 'react-native-splash-screen'
import { AppNavigation } from './src/navigation/AppNavigation';

const App = () => {

  //Using useEffect to lower the splashScreen as soon as the application is loaded
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  )
};

export default App;
