// Importing required modules and components from React Navigation and React Native
import React, {FC, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack'; // Importing the main stack navigator for the app
import AuthStack from './AuthStack';
import {palette} from 'theme';
import {useAppSelector} from 'hooks';

// Enabling native screens for better performance
enableScreens(true);

// Creating a native stack navigator
const Stack = createNativeStackNavigator();

// AppNavigator functional component
export const AppNavigator: FC = () => {
  const {user} = useAppSelector(user => user.authSlice);
  return (
    // Wrapping the navigator with NavigationContainer
    <NavigationContainer
      theme={{
        //@ts-ignore
        colors: {
          background: palette.BG,
        },
      }}>
      {/* Defining the stack navigator */}
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        {/* Defining the main screen */}
        {!user.id ? (
          <Stack.Screen
            navigationKey="AuthStack"
            name="Auth"
            component={AuthStack}
          />
        ) : (
          <Stack.Screen
            navigationKey="AppStack"
            name="App"
            component={AppStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; // Exporting the AppNavigator component
