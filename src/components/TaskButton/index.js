import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const TaskButton = () => {
  return (
    <TouchableOpacity style={styles.taskWrapper}>
      <Text style={styles.taskCategory}>APPOINTMENT</Text>
      <Text style={styles.taskText}>
        Make an appointment with Dra. Aline Freitas - Psychologist.
      </Text>
      <Text style={styles.taskHours}>10:00 am - 12:00 am</Text>
    </TouchableOpacity>
  );
};

export default TaskButton;
