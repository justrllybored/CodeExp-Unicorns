import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "./Components/SearchBar";
import { FontAwesome } from "@expo/vector-icons";
import DiscoverOne from "./Components/DiscoverOne";
import DiscoverTwo from "./Components/DiscoverTwo";

function DiscoverScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={styles.SearchButton}
      >
        <Text style={styles.SearchText}>
          <FontAwesome name="search" size={24} color="black" /> Search{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("DiscoverOne")}
        style={styles.DiscoverOne}
      >
        <Text>Something for now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("DiscoverTwo")}
        style={styles.DiscoverTwo}
      >
        <Text>Something for now</Text>
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
      <Stack.Screen name="DiscoverOne" component={DiscoverOne} />
      <Stack.Screen name="DiscoverTwo" component={DiscoverTwo} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  Container: {},
  SearchButton: {
    backgroundColor: "lightyellow",
    width: "90%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
  },
  SearchText: {
    fontSize: 20,
  },
  DiscoverOne: {
    backgroundColor: "lightblue",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
    height: 300,
    marginTop: 35,
    marginBottom: 8,
  },
  DiscoverTwo: {
    backgroundColor: "lightblue",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
    height: 300,
    margin: 10,
  },
});
