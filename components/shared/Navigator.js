import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";
import GenerateRecipeScreen from "../../screens/GenerateRecipeScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? "#516b8e" : "#bfc9d8";
          let labelColor = focused ? "#516b8e" : "#bfc9d8"; // Text color change

          if (route.name === "Home") {
            iconName = focused ? "home" : "home"; // Replace with the appropriate icon names
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search"; // Replace with the appropriate icon names
          } else if (route.name === "Generate") {
            iconName = focused ? "magic" : "magic"; // Replace with the appropriate icon names
          }

          // Return the icon component with the chosen icon name
          return (
            <>
              <Icon name={iconName} size={size} color={iconColor} />
              <Text style={{ color: labelColor, fontSize: 14 }}>
                {route.name}
              </Text>
            </>
          );
        },
        tabBarLabelStyle: {
          display: "none",
          color: "#000", // Change the label text color
          fontWeight: "bold", // Apply any other styles you nee
          fontSize: 14, // Adjust the font size of the label
        },
        tabBarIconStyle: {
          color: "#bfc9d8",
          // You can add custom styles for the icons here
        },
        tabBarStyle: {
          paddingTop: 4,
          backgroundColor: "#ffffff", // Set the background color of the tab bar
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Generate" component={GenerateRecipeScreen} />
    </Tab.Navigator>
  );
}

export default Navigator;
