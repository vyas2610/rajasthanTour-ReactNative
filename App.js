import HomeComponet from "./components/HomeComponet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import ExploreRaj from "./components/ExploreRaj/ExploreRaj";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeComponet} />
        <Stack.Screen
          name="ExploreRajasthan"
          component={ExploreRaj}
          options={{ title: "Explore Rajasthan" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
