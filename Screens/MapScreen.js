import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MapView, { PROVIDER_GOOGLE , Marker, Callout } from 'react-native-maps';

function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       region={{
         latitude: 1.330718,
         longitude: 103.822342,
         latitudeDelta: 0.05,
         longitudeDelta: 0.05,
       }}
     >
  <Marker
  coordinate={{ latitude : 1.3448 , longitude : 103.8224 }}
  title="Macritchie Reservoir"
  description="A wonderful place to..."
  >
    </Marker>
    <Marker
    coordinate={{ latitude : 1.3138 , longitude : 103.8159 }}
    title="Botanic Gardens"
    description="Started in 1822 by Sir..."
    >
</Marker>
    
     </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
