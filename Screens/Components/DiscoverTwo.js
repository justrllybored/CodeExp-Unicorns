import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function DiscoverOne() {
  return (
    <View style={styles.DiscoverOne}>
      <Image
              style={styles.imageOne}
              source={{
                uri: "https://www.nparks.gov.sg/-/media/nparks-real-content/gardens-parks-and-nature/sg-botanic-gardens/sbg10_047alt.jpg",
              }}
            />
      <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 20, textAlign:"center" }}>
        Botanic Gardens
      </Text>
      <Text
        style={{ marginTop: 20, fontSize: 20, textAlign: "left", margin: 10 }}
      >
        Started in 1822 by Sir Stamford Raffles, the Botanic Gardens is a beautiful park in Singapore. Whether you want to spend time with family, or take a relaxing stroll through the lush greenery, the Botanic Gardens will be a great place to be in.

      </Text>
      <Text
      style={{ fontsize: 15, }}
      >ALERT!:Rain is expected today at this location! Please be careful!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef5db",
    alignItems: "center",
    justifyContent: "center",
  },
  DiscoverOne: {
  backgroundColor: "#ffa270",
  width: "95%",
  alignSelf: "center",
  padding: 10,
  borderRadius: 6,
  height: 700,
  marginTop: 35,
  marginBottom: 8,
  
},
imageOne: {
  height: 200,
  width: 350,
  marginLeft: 10,
},
});
