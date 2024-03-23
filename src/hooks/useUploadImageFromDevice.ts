import {IS_IOS} from 'helpers';
import React from 'react';
import ImageCropPicker, {Image} from 'react-native-image-crop-picker';
// import {
//   doGetUserDetails,
//   doProfilePictureUpload,
//   setProfilePictureLoader,
//   doEventImageUpload
// } from 'slices/authSlice';
import {useAppDispatch} from './useAppDispatch';
import {useAppSelector} from './useAppSelector';
import { ERROR_MESSAGES } from 'utils/constants';

export const useUploadImageFromDevice = () => {
  const dispatch = useAppDispatch();

  const uploadProfileImage = (
    onError?: () => void,
    setImage?: (url: string) => void,
  ) => {
    ImageCropPicker.openPicker({
      cropping: true,
      mediaType: 'photo',
      cropperCircleOverlay: true,
      compressImageQuality: IS_IOS ? 0.6 : 1,
    })
      .then(image => {
        // dispatch(setProfilePictureLoader(true));
        // console.log(image);
        // let formData = new FormData();
        // let fileName = image?.path?.substring?.(
        //   image?.path?.lastIndexOf?.('/') + 1,
        // );
        // if (
        //   IS_IOS &&
        //   (image.filename?.endsWith('.heic') ||
        //     image.filename?.endsWith('.HEIC'))
        // ) {
        //   image.filename = `${fileName.split('.')[0]}.JPG`;
        // }
        // formData.append('file', {
        //   uri: image.path,
        //   name: image.filename ?? fileName,
        //   type: image.mime,
        // });
        // dispatch(doEventImageUpload(formData))
        //   .unwrap()
        //   .then(res => {
        //     if (setImage) {
        //       setImage?.(
        //         urlPathConstructor(res.data.file_path, res.data.file_name),
        //       );
        //       dispatch(setProfilePictureLoader(false));
        //     } else
        //       dispatch(
        //         doProfilePictureUpload({
        //           profile_photo: urlPathConstructor(
        //             res.data.file_path,
        //             res.data.file_name,
        //           ),
        //         }),
        //       )
        //         .unwrap()
        //         .then(() => {
        //           dispatch(setProfilePictureLoader(false));
        //           dispatch(doGetUserDetails());
        //         });
        //   });
      })
      .catch(err => {
        console.log({err});
        if (err.code === ERROR_MESSAGES.IMAGE_PERMISSION) {
          onError?.();
          // showToast(
          //   "Oops! It looks like we can't access your photos and media right now. Please grant us permission to use the Image Picker so that you can enjoy all the features of the app. Head to your device settings and enable photo access for the app",
          //   undefined,
          //   10000,
          //   'Image Picker Permission Denied',
          // );
        }
        // dispatch(setProfilePictureLoader(false));
      });
  };

  const uploadEventImage = (onError?: () => void) => {
    return new Promise<FormData>((resolve, reject) => {
      ImageCropPicker.openPicker({
        cropping: true,
        mediaType: 'photo',
        compressImageQuality: IS_IOS ? 0.6 : 1,
        width: 344,
        height: 255,
      })
        .then(image => {
          console.log(image);
          let formData = new FormData();
          let fileName = image?.path?.substring?.(
            image?.path?.lastIndexOf?.('/') + 1,
          );
          if (
            IS_IOS &&
            (image.filename?.endsWith('.heic') ||
              image.filename?.endsWith('.HEIC'))
          ) {
            image.filename = `${fileName.split('.')[0]}.JPG`;
          }
          formData.append('file', {
            uri: image.path,
            name: image.filename ?? fileName,
            type: image.mime,
          });
          resolve(formData);
        })
        .catch(err => {
          console.log({err});
          if (err.code === ERROR_MESSAGES.IMAGE_PERMISSION) {
            onError?.();
            // showToast(
            //   "Oops! It looks like we can't access your photos and media right now. Please grant us permission to use the Image Picker so that you can enjoy all the features of the app. Head to your device settings and enable photo access for the app",
            //   undefined,
            //   10000,
            //   'Image Picker Permission Denied',
            // );
          }
          reject(err);
        });
    });
  };

  return {
    uploadProfileImage,
    uploadEventImage,
  };
};
