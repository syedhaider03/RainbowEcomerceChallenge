import React, {FC} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {palette} from 'theme';
import styles from './style';

export const Loader: FC = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={palette.primary} size="small" />
      <Text style={styles.loadingText}>loading...</Text>
    </View>
  );
};
