import React, {FC, useState} from 'react';
import styles from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {
  Button,
  DescTextButton,
  Heading,
  Input,
  KeyboardAvoidingView,
  ProfileAvatar,
} from 'components';
import {useAppDispatch, useAppSelector} from 'hooks';
import {doSignupUser} from 'slices/authSlice';
import {resetAndNavigateToScreen} from 'helpers/NavigationHelpers';

export const Signup: FC<NativeStackScreenProps<ParamList, 'Signup'>> = ({
  navigation,
  route,
}) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {signupLoader} = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();
  const [userImage, setUserImage] = useState<string>('');

  const onSubmit = () => {
    dispatch(
      doSignupUser({
        name: fullName,
        email: email?.trim()?.toLocaleLowerCase(),
        password: password?.trim(),
        picture: userImage,
      }),
    )
      .unwrap()
      .then(user => {
        resetAndNavigateToScreen(navigation, 'App');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ProfileAvatar
          initialText={'User Name'}
          profileImage={userImage}
          setImage={setUserImage}
        />
      </View>
      <Heading text="Sign Up" />
      <KeyboardAvoidingView>
        <View style={styles.inputView}>
          <Input
            name="Full Name"
            icon="Person"
            placeholder="Your Full Name"
            onChangeText={value => setFullName(value)}
            value={fullName}
          />
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
        </View>
        <Button
          loadingText="Signing Up..."
          isLoading={signupLoader}
          onPress={onSubmit}
          label={'Sign Up'}
          disabled={!fullName || !email || !password}
        />
        <View style={styles.goToNavView}>
          <DescTextButton
            onPress={() => navigation.navigate('Login')}
            description="Already have an account?"
            label="Sign In"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
