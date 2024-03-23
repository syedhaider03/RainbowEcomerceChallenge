import {RF, WiP} from 'helpers';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {palette} from 'theme';
import styles from './style';

interface TabPillsProps {
  tabs: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const TabPills: React.FC<TabPillsProps> = ({tabs, activeTab, onTabPress}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        horizontal>
        {tabs.map((tab,index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onTabPress(tab)}
            style={[
              styles.tab,
              activeTab === tab ? styles.activeTab : styles.inactiveTab,
            ]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab ? styles.activeTabText : styles.tabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};


export default TabPills;
