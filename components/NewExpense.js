// screens/NewExpense.js
import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { ExpenseContext } from "../contexts/ExpenseContext";

const NewExpense = ({navigation}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useContext(ExpenseContext);

  const addExpenseHandler = () => {
    setExpenses([
      ...expenses,
      { name, amount, date: new Date(), id: expenses.length },
    ]);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Add" onPress={addExpenseHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 15,
    color: "rgb(53 146 244)",
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
  },
});

export default NewExpense;
