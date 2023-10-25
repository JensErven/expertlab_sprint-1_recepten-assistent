import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import Recipes from "../components/Recipes";
import Icon from "react-native-vector-icons/FontAwesome5";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      imageUrl:
        "https://d2vsf1hynzxim7.cloudfront.net/production/media/21118/responsive-images/foodnetwork-image-f6865d4e-f54a-4b62-a0f2-750fb59424b9___default_382_287.jpg",
      name: "Spaghetti Carbonaralksjdf lkj",
      cookTime: 30,
      serves: 2,
      category: "Diner",
      instructions: "Cook spaghetti, fry bacon...",
    },
    {
      id: 2,
      imageUrl:
        "https://d2vsf1hynzxim7.cloudfront.net/production/media/17315/responsive-images/foodnetwork-image-cf833a74-f259-4aa6-b282-0af21eab9648___default_572_429.jpeg",
      name: "Macaroni",
      cookTime: 25,
      serves: 2,
      category: "Diner",
      instructions: "Cook the macaroni, fry bacon...",
    },
    {
      id: 3,
      imageUrl:
        "https://d2vsf1hynzxim7.cloudfront.net/production/media/21118/responsive-images/foodnetwork-image-f6865d4e-f54a-4b62-a0f2-750fb59424b9___default_382_287.jpg",
      name: "Mini Tenderstem, Pumpkin and Pine Nut Tartlets",
      cookTime: 40,
      serves: 5,
      category: "Ontbijt",
      instructions: "Cook spaghetti, fry bacon...",
    },
    {
      id: 4,
      imageUrl:
        "https://d2vsf1hynzxim7.cloudfront.net/production/media/21118/responsive-images/foodnetwork-image-f6865d4e-f54a-4b62-a0f2-750fb59424b9___default_382_287.jpg",
      name: "Macaroni",
      cookTime: 40,
      serves: 2,
      category: "Diner",
      instructions: "Cook the macaroni, fry bacon...",
    },
    {
      id: 5,
      imageUrl:
        "https://d2vsf1hynzxim7.cloudfront.net/production/media/21118/responsive-images/foodnetwork-image-f6865d4e-f54a-4b62-a0f2-750fb59424b9___default_382_287.jpg",
      name: "Macaroni",
      cookTime: 40,
      serves: 2,
      category: "Diner",
      instructions: "Cook the macaroni, fry bacon...",
    },
  ]);

  useEffect(() => {
    setSearchText("");
    setSearchResults(recipes);
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    // Implement your search logic here, e.g., filter recipes based on searchText
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    setSearchResults(filteredRecipes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleAndSearchbar}>
        <Text style={styles.recipesTitle}>Discover you favorite recipes</Text>
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={20} color="#bfc9d8" />
          <TextInput
            style={styles.input}
            placeholderTextColor="#bfc9d8"
            placeholder="Search for recipes..."
            onChangeText={(text) => handleSearch(text)}
            value={searchText}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>

      <Recipes data={searchResults} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "auto",
  },
  searchBarContainer: {
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 15,

    backgroundColor: "#f0f5f9",
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  titleAndSearchbar: {
    padding: 10,
  },
  recipesTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    color: "#bfc9d8",
    fontSize: 18,
  },
});
export default SearchScreen;
