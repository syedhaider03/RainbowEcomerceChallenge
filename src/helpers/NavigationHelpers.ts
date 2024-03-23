import {CommonActions} from '@react-navigation/native';

export const resetAndNavigateToScreen = (
  navigation: any,
  screenName: string,
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: screenName}],
    }),
  );
};
