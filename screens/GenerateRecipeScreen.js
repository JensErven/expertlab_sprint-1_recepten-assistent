import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
const GenerateRecipeScreen = () => {
  const [ingredients, setIngredients] = useState("");
  const [style, setStyle] = useState("");
  const [generatedRecipe, setGeneratedRecipe] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateRecipe = () => {
    // Implement the logic to generate a recipe based on ingredients, style, and healthiness.
    // You can fetch recipe data from an API or generate it locally.
    console.log(`Generate ${style} recipe with exclusively these ingredients and nothing else: ${ingredients}.
    `);
    // Example: Fetch recipes from an API (replace with your API endpoint)
    // fetch(`https://your-api.com/generate-recipe?ingredients=${ingredients}&style=${style}&healthy=${isHealthy}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setRecipes(data.recipes);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching recipes:", error);
    //   });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Generate a Recipe</Text>
      <View style={styles.inputfieldsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter ingredients (comma-separated)"
          onChangeText={(text) => setIngredients(text)}
          value={ingredients}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter style of food (e.g., Asian)"
          onChangeText={(text) => setStyle(text)}
          value={style}
        />

        <TouchableOpacity
          style={styles.buttonGenerate}
          onPress={handleGenerateRecipe}
        >
          <Text style={styles.buttonGenerateText}>Generate Recipe</Text>
        </TouchableOpacity>
      </View>

      {/* {recipes.map((recipe) => (
        <View key={recipe.id} style={styles.recipeCard}>
          <Image source={{ uri: recipe.imageUrl }} style={styles.recipeImage} />
          <Text style={styles.recipeName}>{recipe.name}</Text>
          <Text style={styles.recipeInstructions}>{recipe.instructions}</Text>
          <Button
            title="Save to Recipe Book"
            onPress={() => console.log("save")}
          />
        </View>
      ))} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 15,

    backgroundColor: "#f0f5f9",
  },
  inputfieldsContainer: {
    flexDirection: "column",

    gap: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxLabel: {
    marginRight: 10,
  },
  checkbox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
  recipeCard: {
    marginBottom: 20,
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 10,
  },
  recipeImage: {
    width: 100,
    height: 100,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  recipeInstructions: {
    color: "gray",
  },
  buttonGenerate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    height: 50,
    backgroundColor: "#293241",
  },
  buttonGenerateText: {
    fontSize: 18,
    color: "white",
  },
});
export default GenerateRecipeScreen;
