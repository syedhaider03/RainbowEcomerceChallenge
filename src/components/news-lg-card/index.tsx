import {News} from 'assets/images';
import {TouchableCustomFeedback} from 'components';
import moment from 'moment';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './style';

interface NewsCardLgProps {
  category: string;
  headline: string;
  authorName: string;
  hoursAgo: string;
  imageUrl?: string;
  onPress: () => void;
}

export const NewsCardLg: React.FC<NewsCardLgProps> = ({
  category,
  headline,
  authorName,
  hoursAgo,
  onPress,
}) => {
  return (
    <TouchableCustomFeedback onPress={onPress} style={styles.container}>
      <Image source={News} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text numberOfLines={1} style={styles.category}>
          {category}
        </Text>
        <Text numberOfLines={2} style={styles.headline}>
          {headline}
        </Text>
        <View style={styles.authorContainer}>
          <Text numberOfLines={1} style={styles.authorName}>
            {authorName}
          </Text>
          <View style={styles.dot} />
          <Text numberOfLines={1} style={styles.hoursAgo}>
            {moment(hoursAgo).fromNow()}
          </Text>
        </View>
      </View>
    </TouchableCustomFeedback>
  );
};

