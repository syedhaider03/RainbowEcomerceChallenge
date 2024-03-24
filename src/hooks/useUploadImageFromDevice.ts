import {IS_IOS} from 'helpers';
import ImageCropPicker, {Image} from 'react-native-image-crop-picker';
import {useAppDispatch} from './useAppDispatch';
import {ERROR_MESSAGES} from 'utils/constants';
import {doImageUpload} from 'slices/authSlice';
import {toast} from '@backpackapp-io/react-native-toast';

export const useUploadImageFromDevice = () => {
  const dispatch = useAppDispatch();

  const uploadProfileImage = async (
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
        dispatch(doImageUpload(formData))
          .unwrap()
          .then(res => {
            console.log({res});
            if (setImage) {
              setImage?.(res?.files?.[0]?.fileUrl);
            }
          });
      })
      .catch(err => {
        console.log({err});
        if (err.code === ERROR_MESSAGES.IMAGE_PERMISSION) {
          onError?.();
          toast.error(
            "Oops! It looks like we can't access your photos and media right now. Please grant us permission to use the Image Picker so that you can enjoy all the features of the app. Head to your device settings and enable photo access for the app",
          );
        }
      });
  };

  return {
    uploadProfileImage,
  };
};
