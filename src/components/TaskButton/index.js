import React from 'react';
import {TouchableOpacity, Text, ImagePropTypes} from 'react-native';
import styles from './styles';

const TaskButton = props => {
  return (
    <TouchableOpacity style={styles.taskWrapper}>
      <Text style={styles.taskText}>{props.taskTitle}</Text>
      {/* <Text style={styles.taskHours}>10:00 am - 12:00 am</Text> */}
    </TouchableOpacity>
  );
};

export default TaskButton;
