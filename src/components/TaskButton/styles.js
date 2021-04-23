import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  taskWrapper: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    marginTop: 56,
    backgroundColor: '#FFFFFF',
    height: 130,
    borderRadius: 10,
    borderLeftWidth: 10,
    borderLeftColor: 'red',
  },
  taskCategory: {
    color: 'red',
  },
  taskText: {
    paddingTop: 12,
    fontSize: 18,
    fontFamily: 'verdana',
  },
  taskHours: {
    paddingTop: 7,
    color: 'gray',
  },
});

export default styles;
