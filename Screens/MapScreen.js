import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}


// import * as React from "react";
// import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";

// function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Map</Text>
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
//       <Stack.Screen name="Map" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }
