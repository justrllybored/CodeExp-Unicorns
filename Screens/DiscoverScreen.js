import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

function SearchScreen() {
  return <Text>Hello!</Text>;
}

function DiscoverScreen(navigation) {
  return (
    <TouchableOpacity
      style={styles.SearchButton}
      onPress={() => navigation.navigate("SearchScreen")}
    ></TouchableOpacity>
  );
}

const Stack = createStackNavigator();

export default function DiscoverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  SearchButton: {
    padding: 10,
    width: "90%",
  },
});
