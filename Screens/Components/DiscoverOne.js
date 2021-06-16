import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function DiscoverOne() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
        Macritchie Reservoir
      </Text>
      <Text
        style={{ marginTop: 20, fontSize: 20, textAlign: "center", margin: 10 }}
      >
        Macritchie Resevoir is a wonderful place to spend your day with your
        family and friends. You can choose to hold a picnic with your buddies,
        or play some games with your children. Just remember to bring along
        mosquito repellent to avoid getting your body covered in mosquito bites.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightyellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
