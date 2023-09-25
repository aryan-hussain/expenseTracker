import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewExpense from "./components/NewExpense";
// import ReportScreen from "./screens/ReportScreen";
import { ExpenseProvider } from "./contexts/ExpenseContext";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <ExpenseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewExpense" component={NewExpense} />
          {/* <Stack.Screen name="Report" component={ReportScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: "26px",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
