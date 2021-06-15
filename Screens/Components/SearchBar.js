import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.Container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
