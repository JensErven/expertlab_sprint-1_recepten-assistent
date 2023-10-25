// Import necessary libraries
import { createStackNavigator } from "@react-navigation/stack";
import RecipeDetailsScreen from "../../screens/RecipeDetailsScreen"; // Import your RecipeDetailsScreen component

const Stack = createStackNavigator();

const RecipeDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecipeDetailsScreen"
        component={RecipeDetailsScreen}
        options={{
          title: "Recipe Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default RecipeDetailsStack;
