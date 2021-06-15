import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

// import * as React from "react";
// import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";

// function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Profile</Text>
//       <TouchableOpacity onPress={onPress}></TouchableOpacity>
//     </View>
//   );
// }

// const styles= StyleSheet.create({
//     container:{
//      flex: 1, 
//      justifyContent: "center",
//      alignItems: "center" 
//     }
// })
// const Stack = createStackNavigator();

// export default function ProfileStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }
