import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import DayItem from './src/components/DayItem';
import TaskButton from './src/components/TaskButton';
import Header from './src/components/Header';

const Tasks = () => {
  const days = [
    {date: 1, day: 'mon'},
    {date: 2, day: 'tue'},
    {date: 3, day: 'thu'},
    {date: 4, day: 'wed'},
    {date: 5, day: 'fri'},
    {date: 6, day: 'sat'},
    {date: 7, day: 'sun'},
    {date: 8, day: 'mon'},
    {date: 9, day: 'tue'},
    {date: 10, day: 'thu'},
    {date: 11, day: 'wed'},
    {date: 12, day: 'fri'},
    {date: 13, day: 'sat'},
    {date: 14, day: 'sun'},
    {date: 15, day: 'mon'},
    {date: 16, day: 'tue'},
    {date: 17, day: 'thu'},
    {date: 18, day: 'wed'},
    {date: 19, day: 'fri'},
    {date: 20, day: 'sat'},
    {date: 21, day: 'sun'},
    {date: 22, day: 'mon'},
    {date: 23, day: 'tue'},
    {date: 24, day: 'thu'},
    {date: 25, day: 'wed'},
    {date: 26, day: 'fri'},
    {date: 27, day: 'sat'},
    {date: 28, day: 'sun'},
    {date: 29, day: 'mon'},
    {date: 30, day: 'tue'},
  ];
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{flexGrow: 0, paddingLeft: 16}}
        horizontal={true}
        data={days}
        renderItem={({item}) => <DayItem date={item.date} day={item.day} />}
      />
      <View style={styles.wrapper}>
        <TaskButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    backgroundColor: '#F3F3F6',
  },
  wrapper: {
    flex: 1,
    padding: 20,
  },
});

export default Tasks;
