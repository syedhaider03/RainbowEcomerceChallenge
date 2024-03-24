import { RF } from 'helpers';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {palette} from 'theme';
import styles from './style';

interface HeaderProps {
  title: string;
  onPressViewAll: () => void;
}

export const ViewAllHeader: React.FC<HeaderProps> = ({
  title,
  onPressViewAll,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <TouchableOpacity onPress={onPressViewAll}>
        <Text style={styles.viewAll}>View All</Text>
      </TouchableOpacity> */}
    </View>
  );
};


