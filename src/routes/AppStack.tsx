import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {family, palette} from 'theme';
import {CartScreen, Products, UpdateProfile} from 'screens';
import {AppLogo, Logo, SvgIcon} from 'components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import {HDP, RF} from 'helpers';

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
      {/* <Stack.Screen name="Details" component={NewsDetailsScreen} /> */}
    </Stack.Navigator>
  );
};
export default AppStack;

const Tab = createBottomTabNavigator<ParamList>();
const BottomTabNavigator = () => {
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
          tabBarBadge: 1,
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

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(12.5),
    color: palette.black,
  },
  focused: {
    color: palette.primary,
  },
  tabbar: {
    borderTopWidth: 0,
    backgroundColor: palette.white,
    shadowColor: palette.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,
    elevation: 7,
    paddingTop: 5,
  },
  centeredIcon: {
    paddingBottom: HDP(5),
  },
  androidSpecific: {
    paddingBottom: 5,
    height: HDP(60),
  },
});
