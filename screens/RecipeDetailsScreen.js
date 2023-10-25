import React from "react";
import { View, Text, Button } from "react-native";

const RecipeDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.instructions}</Text>
      {/* Add more details about the recipe here. */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RecipeDetailsScreen;
