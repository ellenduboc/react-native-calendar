import React from 'react';
import styles from './styles';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DayItem = props => {
  return (
    <TouchableOpacity style={styles.dayWrapper}>
      <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.day}>{props.day}</Text>
    </TouchableOpacity>
  );
};

export default DayItem;
