import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import ExpenseItem from "../components/ExpenseItem";
import { ExpenseContext } from "../contexts/ExpenseContext";

const HomeScreen = ({ navigation }) => {
  const [expenses] = useContext(ExpenseContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Expenses</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ExpenseItem {...item} />}
      />
      <Button
        title="Add New Expense"
        onPress={() => navigation.navigate("NewExpense")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 15,
    color: "rgb(53 146 244)",
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    marginBottom: 20,
  },
});

export default HomeScreen;
