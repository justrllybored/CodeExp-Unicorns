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
import DiscoverThree from "./Components/DiscoverThree";

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
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.textTitleTwo}>Botanic Gardens</Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.textDescriptionTwo}>Started in 1822</Text>
                  <Text>by Sir Stamford</Text>
                  <Text>Raffles, the Botanic </Text>
                  <Text>Gardens is a testa</Text>
                  <Text>-ment to Singapore's</Text>
                  <Text>(Click to find out</Text>
                  <Text>more about this place)</Text>
                </View>
                <Image
                  style={styles.imageTwo}
                  source={{
                    uri: "https://www.nparks.gov.sg/-/media/nparks-real-content/gardens-parks-and-nature/sg-botanic-gardens/sbgtanglin_gate.jpg",
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.textRatingTwo}>Ratings:</Text>
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
                    <FontAwesome name="star" size={24} color="black" />
                  </View>
                </View>
                <View>
                  <Text style={styles.textPeopleTwo}>People at location:</Text>
                  <Text
                    style={{
                      marginLeft: 50,
                      marginLeft: 50,
                      fontSize: 30,
                      fontWeight: "bold",
                      marginTop: 0,
                    }}
                  >
                    30
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("DiscoverThree")}
            style={styles.DiscoverThree}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.textTitleThree}>Japanese Cemetary Park</Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.textDescriptionThree}>
                    Started in 1822
                  </Text>
                  <Text>by Sir Stamford</Text>
                  <Text>Raffles, the Botanic </Text>
                  <Text>Gardens is a testa</Text>
                  <Text>-ment to Singapore's</Text>
                  <Text>(Click to find out</Text>
                  <Text>more about this place)</Text>
                </View>
                <Image
                  style={styles.imageThree}
                  source={{
                    uri: "https://static.mothership.sg/1/2019/07/japanese-cemetery.png",
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.textRatingThree}>Ratings:</Text>
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
                    <FontAwesome name="star-o" size={24} color="black" />
                  </View>
                </View>
                <View>
                  <Text style={styles.textPeopleThree}>
                    People at location:
                  </Text>
                  <Text
                    style={{
                      marginLeft: 50,
                      fontSize: 30,
                      fontWeight: "bold",
                      marginTop: 0,
                    }}
                  >
                    38
                  </Text>
                </View>
              </View>
            </View>
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
      <Stack.Screen name="DiscoverThree" component={DiscoverThree} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "lightyellow",
  },
  SearchButton: {
    backgroundColor: "#bdc3c7",
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
  DiscoverThree: {
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
    fontSize: 20,
  },

  textPeopleOne: {
    textAlign: "right",
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
    textAlign: "center",
    marginTop: 20,
  },
  textDescriptionTwo: {
    marginTop: 0,
    fontSize: 15,
  },
  textRatingTwo: {
    textAlign: "left",
    marginTop: 15,
    marginLeft: 20,
    fontSize: 20,
  },
  iconRatingTwo: {
    marginLeft: 20,
    marginTop: 5,
  },
  imageTwo: {
    height: 120,
    width: 170,
    marginLeft: 10,
  },

  textPeopleTwo: {
    textAlign: "right",
    marginBottom: 5,
    marginLeft: 40,
    marginTop: 15,
    fontSize: 20,
  },
  textTitleThree: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
  textDescriptionThree: {
    marginTop: 0,
    fontSize: 15,
  },
  textRatingThree: {
    textAlign: "left",
    marginTop: 15,
    marginLeft: 20,
    fontSize: 20,
  },
  iconRatingThree: {
    marginLeft: 20,
    marginTop: 5,
  },
  imageThree: {
    height: 120,
    width: 170,
    marginLeft: 10,
  },

  textPeopleThree: {
    textAlign: "right",
    marginBottom: 5,
    marginLeft: 40,
    marginTop: 15,
    fontSize: 20,
  },
});
