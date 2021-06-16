import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "./Components/SearchBar";
import { FontAwesome } from "@expo/vector-icons";
import DiscoverOne from "./Components/DiscoverOne";
import DiscoverTwo from "./Components/DiscoverTwo";
import { Searchbar } from "react-native-paper";

function DiscoverScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.textTitleOne}>Macritchie Reservoir</Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.textDescriptionOne}>
                    Macritchie Reservoir
                  </Text>
                  <Text>is a wonderful place</Text>
                  <Text>to spend your day</Text>
                  <Text>with your family and</Text>
                  <Text>friends. You can...</Text>
                  <Text>(Click to find out</Text>
                  <Text>more about this place)</Text>
                </View>
                <Image
                  style={styles.imageOne}
                  source={{
                    uri: "https://lp-cms-production.imgix.net/2019-06/a2aa48e66952bf8816898991072e32f5-macritchie-reservoir.jpg",
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.textRatingOne}>Ratings:</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 20,
                      marginTop: 6,
                    }}
                  >
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome
                      name="star-half-full"
                      size={24}
                      color="black"
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.textPeopleOne}>People at location:</Text>
                  <Text
                    style={{
                      marginLeft: 50,
                      fontSize: 30,
                      fontWeight: "bold",
                      marginTop: 0,
                    }}
                  >
                    125
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("DiscoverTwo")}
            style={styles.DiscoverTwo}
          >
            <Text style={styles.textTitleTwo}>Title</Text>
            <Text style={styles.textDescriptionTwo}>Description.</Text>
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
      </ScrollView>
    </SafeAreaView>
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
  Container: {
    flex: 1,
    backgroundColor: "lightyellow",
  },
  SearchButton: {
    backgroundColor: "#fbe9e7",
    width: "90%",
    borderRadius: 6,
    borderColor: "black",
    borderWidth: 1,
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
    backgroundColor: "#ffa270",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 6,
    height: 300,
    marginTop: 20,
    marginBottom: 8,
  },
  DiscoverTwo: {
    backgroundColor: "#ffa270",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 6,
    height: 300,
    margin: 10,
  },
  textTitleOne: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
  textDescriptionOne: {
    marginTop: 0,
    fontSize: 15,
  },
  textRatingOne: {
    textAlign: "left",
    marginTop: 15,
    marginLeft: 20,
    fontSize: 25,
  },

  textPeopleOne: {
    textAlign: "left",
    marginBottom: 5,
    marginLeft: 40,
    marginTop: 15,
    fontSize: 20,
  },
  imageOne: {
    height: 120,
    width: 170,
    marginLeft: 10,
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
