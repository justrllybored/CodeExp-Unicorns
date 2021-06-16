import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function BookMarkScreen() {
  return (
    <View style={styles.container}>
      <Text>BookMarks!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function BookMarkStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookMarks" component={BookMarkScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
