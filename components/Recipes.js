import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import RecipeCard from "./RecipeCard";

const Recipes = ({ data }) => {
  return (
    <View style={styles.recipeList}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RecipeCard item={item} />}
      />
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  recipeList: {
    paddingBottom: 0,
  },
});
