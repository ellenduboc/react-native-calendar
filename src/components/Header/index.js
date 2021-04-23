import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View>
      <Text style={styles.header}>Task Calendar</Text>
    </View>
  );
};

export default Header;
