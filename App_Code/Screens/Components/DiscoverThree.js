import * as React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

export default function DiscoverThree() {
  return (
    <View style={styles.DiscoverOne}>
      <Image
        style={styles.imageOne}
        source={{
          uri: "https://static.mothership.sg/1/2019/07/japanese-cemetery.png",
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Japanese Cemetery Park
      </Text>
      <Text
        style={{ marginTop: 20, fontSize: 20, textAlign: "left", margin: 10 }}
      >
        Japanese Cemetery Park is an important location for the Japanese legacy
        in Singapore. Covering over 30,000 meters of land, the park is a
        beautiful showcase of Japanese culture and beauty. Please be reminded to
        be respectful within the park.
      </Text>
      <Text style={{ fontsize: 15, margin: 10 }}>
        ALERT!: The park will be undergoing renovations from the 13th of June to
        the 20th of June.
      </Text>
      <Button title="Add to Bookmarks"></Button>
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
