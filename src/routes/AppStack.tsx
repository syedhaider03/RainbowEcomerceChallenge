import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {palette} from 'theme';
import {CartScreen, Products, UpdateProfile} from 'screens';
import {AppLogo, SvgIcon} from 'components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAppSelector} from 'hooks';
import styles from './styles';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator<ParamList>();
export const AppStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: palette.BG,
        },
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitle: () => <AppLogo size={60} />,
      }}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
export default AppStack;

const Tab = createBottomTabNavigator<ParamList>();
const BottomTabNavigator = () => {
  const {cartItems} = useAppSelector(state => state.productsSlice);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: ({focused, color, children}) => {
          if (children === 'AddActivity') return '';
          return (
            <Text style={[styles.tabLabel, focused && styles.focused]}>
              {children}
            </Text>
          );
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <SvgIcon
                name={focused ? 'HomeActive' : 'Home'}
                size={20}
                color={color}
              />
            );
          },
        }}
        name="Products"
        component={Products}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <SvgIcon
                name={focused ? 'CartActive' : 'Cart'}
                size={27}
                color={color}
              />
            );
          },
          tabBarBadge: cartItems.length > 0 ? cartItems.length : undefined,
          tabBarBadgeStyle: {backgroundColor: 'black'}, // Example style for the badge
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <SvgIcon
                name={focused ? 'ProfileActive' : 'Profile'}
                size={21}
                color={color}
              />
            );
          },
        }}
        name="Profile"
        component={UpdateProfile}
      />
    </Tab.Navigator>
  );
};
