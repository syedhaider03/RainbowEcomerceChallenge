import React, {FC, useEffect, useState} from 'react';
import screenStyles from './styles';
import {ImageSourcePropType, Text, View} from 'react-native';
import {Image} from 'react-native-animatable';
import {HDP, WiP, getPriceStatus} from 'helpers';
import {
  OverlaySkeletonLoader,
  SquareIconButton,
  SvgIcon,
  TouchableCustomFeedback,
} from 'components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {palette} from 'theme';
import SnapCarousel from 'react-native-snap-carousel';
import {placeholder_lg} from 'assets/images';
import {DashDotPagination} from 'react-native-onboard';

type Props = {
  title: string;
  cost: string | number;
  images: Products.Product['images'];
  noCostIncluded?: boolean;
};

export const Carousel: FC<Props> = ({images, title, cost, noCostIncluded}) => {
  const styles = screenStyles();
  const navigation = useNavigation<NavigationProp<ParamList>>();
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.headerCustom}>
        <View style={styles.subView}>
          <TouchableCustomFeedback
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backBtn}>
            <Text style={styles.priceText}>{cost}</Text>
          </TouchableCustomFeedback>
          <View></View>
        </View>
      </View>
      <View>
        <SnapCarousel
          data={images}
          renderItem={({item}) => {
            return <CarouselImage image={{uri: item}} />;
          }}
          onSnapToItem={index => setActiveSlide(index)}
          inactiveSlideOpacity={0.3}
          sliderWidth={WiP(100)}
          itemWidth={WiP(100)}
        />
        {images?.length > 1 && (
          <View style={styles.pagingContainer}>
            <DashDotPagination
              totalPages={images?.length}
              currentPage={activeSlide}
              paginationColor={palette.ashWhite}
              paginationSelectedColor={palette.primary}
            />
          </View>
        )}
      </View>
    </View>
  );
};

type CarouselImageProps = {
  image: ImageSourcePropType;
};

export const CarouselImage: FC<CarouselImageProps> = ({image}) => {
  const styles = screenStyles();
  const [isLoading, setLoading] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(true);
  return (
    <>
      <Image
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setImageLoaded(false);
        }}
        style={styles.carouselImage}
        defaultSource={placeholder_lg}
        source={isImageLoaded ? image : placeholder_lg}
      />
      <OverlaySkeletonLoader
        isVisible={!isLoading}
        style={styles.carouselImage}
      />
    </>
  );
};
