import {Avatar, Breaking} from 'assets/images';
import {TouchableCustomFeedback} from 'components';
import React from 'react';
import styles from './styles';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {palette} from 'theme';

interface HeadlineCardProps {
  category: string;
  author: string;
  headline: string;
  backgroundImage: ImageSourcePropType;
  logo: ImageSourcePropType;
  onPress: () => void;
}

export const HeadlineCard: React.FC<HeadlineCardProps> = ({
  category = 'General',
  author = 'Unknown',
  headline,
  onPress,
}) => {
  return (
    <TouchableCustomFeedback onPress={onPress} style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={Breaking}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.categoryPill}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.contentContainer}>
              <View style={styles.logoContainer}>
                <Image source={Avatar} style={styles.logo} />
              </View>
              <Text numberOfLines={1} style={styles.companyName}>
                {author}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text numberOfLines={3} style={styles.headline}>
                {headline}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableCustomFeedback>
  );
};


