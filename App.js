import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MapScreen from "./Screens/MapScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import DiscoverScreen from "./Screens/DiscoverScreen";
import BookMarkScreen from "./Screens/BookMarkScreen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Map") {
              iconName = focused ? "map" : "map-o";
            } else if (route.name === "Profile") {
              iconName = focused ? "user" : "user-o";
            } else if (route.name === "Discover") {
              iconName = focused ? "location" : "location-outline";
            } else if (route.name === "BookMarks") {
              iconName = focused ? "bookmark" : "bookmark-o";
            }

            // You can return any component that you like here!
            if (route.name === "Map")
              return <FontAwesome name={iconName} size={size} color={color} />;
            else if (route.name === "Profile")
              return <FontAwesome name={iconName} size={size} color={color} />;
            else if (route.name === "Discover")
              return <Ionicons name={iconName} size={size} color={color} />;
            else if (route.name === "BookMarks")
              return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="BookMarks" component={BookMarkScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
