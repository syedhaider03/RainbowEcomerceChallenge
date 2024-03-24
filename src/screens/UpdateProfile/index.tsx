import React, {FC, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from 'hooks';
import {Button, Input, KeyboardAvoidingView, ProfileAvatar} from 'components';
import styles from './style';
import {doLogout, doUpdateUserProfile} from 'slices/authSlice';

export const UpdateProfile: FC<
  NativeStackScreenProps<ParamList, 'Profile'>
> = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const {profileUpdatingInProgress} = useAppSelector(state => state.authSlice);
  const {user} = useAppSelector(State => State.authSlice);
  const [fullName, setFullName] = useState<string>(user.name);
  const [userImage, setUserImage] = useState<string>(user.picture ?? '');
  const [password, setPassword] = useState<string>('');

  const onPressSubmit = () => {
    dispatch(
      doUpdateUserProfile({
        name: fullName,
        picture: userImage,
        password: password ? password : user.password,
      }),
    )
      .unwrap()
      .then(() => {
        navigation.goBack();
      });
  };

  const onLogout=()=>{
    dispatch(doLogout())
  }
  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView contentContainerStyle={{flexGrow: 1}}>
        {/*--------- Profile Image Upload Section ----------*/}
        <View style={styles.imageContainer}>
          <ProfileAvatar
            initialText={user.name}
            profileImage={userImage}
            setImage={setUserImage}
          />
        </View>
        <View style={styles.container}>
          <Input
            name={'Full Name'}
            icon="Person"
            placeholder="Your Full Name"
            onChangeText={value => setFullName(value)}
            value={fullName}
            isRequired
          />
          <Input
            name="Email"
            icon="Mail"
            placeholder="Your Email"
            value={user.email}
            isRequired
            disabled
          />
          <Input
            secureTextEntry
            name="New Password"
            icon="Lock"
            placeholder="Your Password"
            onChangeText={value => setPassword(value)}
            value={password}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.cancelButton}
          onPress={onLogout}
          label={'Logout'}
          labelStyle={styles.btnLabelStyle}
        />
        <Button
          style={styles.mainButton}
          onPress={onPressSubmit}
          label={'Update Profile'}
          loadingText={'Updating...'}
          isLoading={profileUpdatingInProgress}
          disabled={!fullName}
        />
      </View>
    </View>
  );
};
