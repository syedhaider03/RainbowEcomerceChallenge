import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import styles from './style';
import {Image, ImageStyle, Text, View} from 'react-native';
import {
  OverlaySkeletonLoader,
  SkeletonLoader,
  SvgIcon,
  TouchableCustomFeedback,
} from 'components';
import {getCircleRadiusStyle, HDP, RF} from 'helpers';
import {placeholder} from 'assets/images';
import {useAppSelector, useUploadImageFromDevice} from 'hooks';
import {palette} from 'theme';
import {TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type Props = {
  initialText: string;
  profileImage: string;
  isViewOnly?: boolean;
  isDetailsLoading?: boolean;
  setImage?: Dispatch<SetStateAction<string>>;
};
export const ProfileAvatar: FC<Props> = ({
  initialText,
  profileImage,
  isViewOnly,
  isDetailsLoading,
  setImage,
}) => {
  const {uploadProfileImage} = useUploadImageFromDevice();
  const [isPermModalVisible, setPermModalVisible] = useState(false);
  const {profileImageUploadLoader} = useAppSelector(state => state.authSlice);
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <View style={styles.shadowView}>
          <SkeletonLoader
            style={styles.avatarLoader}
            isVisible={!isDetailsLoading}>
            <AvatarImage
              radius={HDP(105)}
              profileImage={profileImage}
              isViewOnly={isViewOnly}
              initialText={initialText}
              isLoading={profileImageUploadLoader}
            />
          </SkeletonLoader>
        </View>
        {!isViewOnly && !profileImageUploadLoader && (
          <TouchableOpacity
            onPress={() => {
              uploadProfileImage(() => setPermModalVisible(true), setImage);
            }}
            style={styles.addBtn}>
            <SvgIcon name="Plus" size={HDP(12)} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

type SpecificProps = {
  radius: number;
  style?: ImageStyle;
  fontSize?: number;
};

export const ProfileInitials: FC<
  Pick<Props, 'initialText'> & SpecificProps
> = ({initialText, radius, style, fontSize}) => {
  return (
    <View style={[styles.initialView, style, getCircleRadiusStyle(radius)]}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[styles.initialLabel, !!fontSize && {fontSize}]}>
        {initialText?.[0]?.toUpperCase()}
      </Text>
    </View>
  );
};

type SpecificInitialProps = {
  radius: number;
  style?: ImageStyle;
  fontSize?: number;
};

export const SmallProfileInitials: FC<
  Pick<Props, 'initialText'> & SpecificInitialProps
> = ({initialText, radius, style, fontSize}) => {
  return (
    <View
      style={[
        styles.initialView,
        {padding: 0},
        style,
        getCircleRadiusStyle(radius),
      ]}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[styles.initialLabel, !!fontSize && {fontSize}]}>
        {initialText?.[0]?.toUpperCase()}
      </Text>
    </View>
  );
};

export const AvatarImage: FC<
  Pick<Props, 'profileImage' | 'initialText' | 'isViewOnly' | 'isLoading'> &
    SpecificProps
> = ({profileImage, initialText, radius, style, isViewOnly, isLoading}) => {
  const [isImageUrlError, setImageUrlError] = useState(false);
  const [isImageLoading, setImageLoading] = useState(false);
  // return profileImage && !isImageUrlError ? (
  return true ? (
    <>
      <Image
        defaultSource={placeholder}
        source={profileImage ? {uri: profileImage} : placeholder}
        style={[
          styles.avatar,
          style,
          getCircleRadiusStyle(radius),
          isImageLoading && {opacity: 0},
          isViewOnly && {},
        ]}
        onError={() => {
          console.log('on error');
          setImageLoading(false);
          setImageUrlError(true);
        }}
        onLoadStart={() => {
          console.log('on load start');
          setImageLoading(true);
        }}
        onLoadEnd={() => {
          console.log('on load end');
          setImageLoading(false);
        }}
      />
      {isImageLoading && (
        <SkeletonLoader
          isVisible={!isImageLoading}
          style={[
            styles.avatar,
            style,
            getCircleRadiusStyle(radius),
            {
              position: 'absolute',
            },
          ]}
        />
      )}
      {isLoading && (
        <OverlaySkeletonLoader
          isVisible={!isLoading}
          style={[
            styles.avatar,
            style,
            getCircleRadiusStyle(radius),
            {
              position: 'absolute',
            },
          ]}
        />
      )}
    </>
  ) : (
    <ProfileInitials
      style={style}
      radius={radius ?? HDP(105)}
      initialText={initialText}
    />
  );
};
