import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";
import Navigator from "./components/shared/Navigator";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.background}>
        <Stack.Navigator>
          <Stack.Screen
            name="Navigator"
            component={Navigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecipeDetailsScreen"
            component={RecipeDetailsScreen}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Make the background fill the entire screen
    backgroundColor: "#ffffff", // Replace with your desired background color
  },
});
export default App;
