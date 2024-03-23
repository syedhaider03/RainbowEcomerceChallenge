import React from 'react';
import {ScrollView, View, Text, Image, Button, Linking} from 'react-native';
import {DetailsHeader} from 'components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';
import {Avatar, News} from 'assets/images';
import styles from './styles';

const NewsDetailsScreen: React.FC<
  NativeStackScreenProps<ParamList, 'Details'>
> = ({route}) => {
  const details = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DetailsHeader
        authorName={details.author}
        date={moment(details.publishedAt).format('MMMM DD, YYYY')}
        categoryName={''}
        authorImageUrl={Avatar}
      />
      <View style={styles.imageContainer}>
        <Image source={News} style={styles.image} resizeMode="cover" />
        <Text style={styles.imageText}>Source of photo</Text>
      </View>
      <Text style={styles.description}>{details.title}</Text>
      <Button
        title="Read More Here"
        onPress={() => Linking.openURL(details.url)}
      />
    </ScrollView>
  );
};

export default NewsDetailsScreen;
