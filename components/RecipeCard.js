import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import Modal from "react-native-modal"; // Import Modal from react-native-modal
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

import Icon from "react-native-vector-icons/FontAwesome5";

const RecipeCard = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const navigation = useNavigation(); // Get navigation object

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RecipeDetailsScreen", { item });
        }}
      >
        <View key={item.id} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>

            <View style={styles.tagsContainer}>
              <View style={styles.cookingTime}>
                <Icon name="clock" size={20} color="#8a9fae" />
                <Text style={styles.cookingTimeText}>{item.cookTime} min</Text>
              </View>
              <View style={styles.serves}>
                <Icon name="utensils" size={20} color="#8a9fae" />
                <Text style={styles.cookingTimeText}>{item.serves}</Text>
              </View>
            </View>
          </View>
          <View style={styles.categoryTag}>
            <Text style={styles.categoryTagText}>{item.category}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    height: 150,
    backgroundColor: "#f0f5f9",
    borderRadius: 20,
    margin: 10,

    gap: 4,
    flexDirection: "row", // Arrange the image and text in a row
    shadowColor: "#b5babd",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 0.75, // Make the image container take up 1/3 of the available space
    // Add some space between the image and text
  },
  image: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
  tagsContainer: {
    width: "75%",
    marginRight: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "space-between",

    flex: 1, // Make the text container take up 2/3 of the available space
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  cookingTime: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  serves: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  cookingTimeText: {
    fontSize: 14,

    color: "#8a9fae",
  },
  categoryTag: {
    position: "absolute",
    padding: 10,
    top: 0,
    left: 0,
    borderTopStartRadius: 15,
    borderBottomEndRadius: 15,
    backgroundColor: "#e67a49",
  },
  categoryTagText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});

export default RecipeCard;
