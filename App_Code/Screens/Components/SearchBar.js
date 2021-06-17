import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.Container}>
      <Text>It's a Work in Progress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
    flex: 1,
  },
});
