import React, {FC, useEffect, useState} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from 'hooks';
import {Button, Input, KeyboardAvoidingView, ProfileAvatar} from 'components';
import styles from './style';

export const UpdateProfile: FC<
  NativeStackScreenProps<ParamList, 'Profile'>
> = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const {profileUpdatingInProgress, profileImageUploadLoader} = useAppSelector(
    state => state.authSlice,
  );

  const {user} = useAppSelector(State => State.authSlice);
  const [fullName, setFullName] = useState<string>(user.name);
  const [userImage, setUserImage] = useState<string>(user.profile_image ?? '');

  useEffect(() => {
    // dispatch(doGetUserDetails());
  }, []);

  const onPressSubmit = () => {
    // dispatch(
    //   doUpdateProfile({
    //     name: fullName,
    //     profile_photo: userImage,
    //   }),
    // )
    //   .unwrap()
    //   .then(() => {
    //     dispatch(doGetUserDetails());
    //     navigation.goBack();
    //   });
  };

  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView contentContainerStyle={{flexGrow: 1}}>
        {/*--------- Profile Image Upload Section ----------*/}
        <View style={styles.imageContainer}>
          <ProfileAvatar
            initialText={user.name}
            profileImage={userImage}
            isLoading={profileImageUploadLoader}
            setImage={setUserImage}
            isFromUpdateProfile
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
            disabled
            isRequired
          />

          <Text style={styles.heading}>
            Select the categories that best describe you
            <Text style={{color: 'red'}}> *</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          label={'Cancel'}
          labelStyle={styles.btnLabelStyle}
        />
        <Button
          style={styles.mainButton}
          onPress={onPressSubmit}
          label={'Update Profile'}
          loadingText={'Updating...'}
          isLoading={profileUpdatingInProgress}
          // disabled={!fullName || !phone || (!latitude && !longitude)}
        />
      </View>
    </View>
  );
};
