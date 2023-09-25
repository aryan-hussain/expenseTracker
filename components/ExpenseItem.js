// components/ExpenseItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpenseItem = ({ name, amount, date }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{amount}</Text>
      <Text>{date.toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  }
});

export default ExpenseItem;
