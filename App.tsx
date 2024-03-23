import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store, {persistor} from 'store';
import {Toasts} from '@backpackapp-io/react-native-toast';
import AppNavigator from 'routes';
//@ts-ignore
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    // Assign this to a dev-only button or useEffect call
    const connectToRemoteDebugger = () => {
      NativeDevSettings.setIsDebuggingRemotely(true);
    };
    connectToRemoteDebugger();
  }, []);
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <AppNavigator />
          <Toasts />
        </SafeAreaProvider>
      </GestureHandlerRootView>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
