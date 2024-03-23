import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {palette} from 'theme';
import {Login, Signup} from 'screens';
import {AppLogo, Logo} from 'components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HiP } from 'helpers';

const Stack = createNativeStackNavigator<ParamList>();
export const AuthStack: FC = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: HiP(4)}}>
      <Logo size={90} animation={'fadeIn'} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          animation: 'fade_from_bottom',
          contentStyle: {
            backgroundColor: palette.BG,
          },
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default AuthStack;
