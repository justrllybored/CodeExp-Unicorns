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
        <Text style={styles.textTitleOne}>Title</Text>
        <Text style={styles.textDescriptionOne}>Description</Text>
        <Text style={styles.textRatingOne}>
          Ratings:
          <FontAwesome name="star" size={24} color="black" />
          <FontAwesome name="star" size={24} color="black" />
          <FontAwesome name="star" size={24} color="black" />
          <FontAwesome name="star" size={24} color="black" />
          <FontAwesome name="star-half-full" size={24} color="black" />
        </Text>
        <Text style={styles.textPeopleOne}>People at location: 69</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("DiscoverTwo")}
        style={styles.DiscoverTwo}
      >
        <Text style={styles.textTitleTwo}>Title</Text>
        <Text style={styles.textDescriptionTwo}>Description</Text>
        <Text style={styles.textRatingTwo}>
          Ratings:
          <FontAwesome name="star" size={24} color="black" />
          <FontAwesome name="star" size={24} color="black" />
          <FontAwesome name="star" size={24} color="black" />
          <FontAwesome name="star" size={24} color="black" />
          <FontAwesome name="star-o" size={24} color="black" />{" "}
        </Text>
        <Text style={styles.textPeopleTwo}>People at location: 126</Text>
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
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
    height: 300,
    margin: 10,
  },
  textTitleOne: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
    marginTop: 20,
    marginLeft: 20,
  },
  textDescriptionOne: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
  },
  textRatingOne: {
    textAlign: "left",
    marginTop: 120,
    marginLeft: 20,
    fontSize: 25,
  },

  textPeopleOne: {
    textAlign: "left",
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 8,
    fontSize: 20,
  },
  textTitleTwo: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
    marginTop: 20,
    marginLeft: 20,
  },
  textDescriptionTwo: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
  },
  textRatingTwo: {
    textAlign: "left",
    marginTop: 120,
    marginLeft: 20,
    fontSize: 25,
  },
  iconRatingTwo: {
    marginLeft: 20,
    marginTop: 5,
  },
  textPeopleTwo: {
    textAlign: "left",
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 8,
    fontSize: 20,
  },
});
