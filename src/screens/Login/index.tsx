import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Button,
  DescTextButton,
  Heading,
  Input,
  KeyboardAvoidingView,
  TouchableCustomFeedback,
} from 'components';
import {useAppDispatch, useAppSelector} from 'hooks';
import {doLoginUser} from 'slices/authSlice';
import {resetAndNavigateToScreen} from 'helpers/NavigationHelpers';
import styles from './style';

export const Login: FC<NativeStackScreenProps<ParamList, 'Login'>> = ({
  navigation,
  route,
}) => {
  const {loginLoader} = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <View style={styles.container}>
      <Heading text="Sign In" />
      <KeyboardAvoidingView>
        <View style={styles.inputView}>
          <Input
            name="Email"
            icon="Mail"
            placeholder="Your Email"
            onChangeText={value => setEmail(value)}
            value={email}
          />
          <Input
            secureTextEntry
            name="Password"
            icon="Lock"
            placeholder="Your Password"
            onChangeText={value => setPassword(value)}
            value={password}
          />
          {/* <TouchableCustomFeedback
            onPress={() => navigation.navigate('PasswordRecoverStack')}
            style={styles.forgotBtn}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableCustomFeedback> */}
        </View>
        <Button
          onPress={() => {
            resetAndNavigateToScreen(navigation, 'App')
            // dispatch(
            //   doLoginUser({
            //     email: email?.trim()?.toLocaleLowerCase(),
            //     password,
            //   }),
            // )
            //   .unwrap()
            //   .then(user => {
            //     resetAndNavigateToScreen(navigation, 'App');
            //   });
          }}
          label={'Sign In'}
          loadingText="Signing In..."
          isLoading={loginLoader}
          // disabled={!email || !password}
        />
        <View style={styles.goToNavView}>
          <DescTextButton
            onPress={() => {
              navigation.navigate('Signup')
            }}
            description="Don't have an account?"
            label="Sign Up"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
