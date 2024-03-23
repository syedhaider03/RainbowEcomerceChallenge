import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import styles from './styles';

interface HeaderProps {
  authorName: string;
  date: string;
  categoryName: string;
  authorImageUrl: ImageSourcePropType;
}

export const DetailsHeader: React.FC<HeaderProps> = ({
  authorName,
  date,
  categoryName,
  authorImageUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image source={authorImageUrl} style={styles.authorImage} />
        <View style={styles.textContainer}>
          <Text style={styles.authorName}>{authorName}</Text>
          <Text style={styles.authorName}> - </Text>
          <Text style={styles.date}>{date}</Text>
          {/* <Text style={styles.authorName}> - </Text>
          <Text style={styles.category}>{categoryName}</Text> */}
        </View>
      </View>
    </View>
  );
};

