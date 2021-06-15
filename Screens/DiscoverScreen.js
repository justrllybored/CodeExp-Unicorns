import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "./Components/SearchBar";

function DiscoverScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={styles.SearchButton}
      >
        <Text> Search </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function DiscoverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Search" component={SearchBar} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "yellow",
    width: "30%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  SearchButton: {},
});
