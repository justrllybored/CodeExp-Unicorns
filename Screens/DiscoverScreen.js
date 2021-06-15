import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "./Components/SearchBar";
import { FontAwesome } from "@expo/vector-icons";

function DiscoverScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <FontAwesome name="search" size={24} color="black" />
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={styles.SearchButton}
      >
        <Text style={styles.SearchText}> Search </Text>
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
    backgroundColor: "lightyellow",
    width: "90%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    padding: 10,
  },
  SearchButton: {},
  SearchText: {
    fontSize: 20,
  },
});
