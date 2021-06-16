import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet,Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function ProfileScreen() {
  return (
    
      <View style={styles.DiscoverOne}>
      <Image
        style={styles.imageOne}
        source={{
          uri: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191212182124-04-singapore-buildings.jpg",
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 50,
          marginTop: 20,
          textAlign: "left",
          marginLeft:10
        }}
      >
        HEY!
      </Text>
      <Text
        style={{ marginTop: 20, fontSize: 20, textAlign: "left", margin: 10 }}
      >
        Add friends using your secret code below to organize fabulous trips to the wild outdoors of Singapore with them!
      </Text>
      <Text style={{ fontsize: 15, margin: 10 }}>
        Code: X462eye#%
      </Text>

      <Text
      style={{
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20,
        textAlign: "left",
        marginLeft:10
      }}
      >
        What ya waiting for? Add them now and ExploreSG! </Text>
      <Text></Text>
      <Text
        style={{ marginTop: 20, fontSize: 20, textAlign: "center", margin: 10 }}
      >
        My friend List
      </Text>
    </View>

    
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef5db",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  DiscoverOne: {
    backgroundColor: "#ffa270",
    width: "95%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 6,
    height: 750,
    marginTop: 10,
    marginBottom: 8,
  },
  imageOne: {
    height: 200,
    width: 350,
    marginLeft: 10,
  },
});


const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
