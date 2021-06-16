import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function DiscoverOne() {
  return (
    <View style={styles.DiscoverOne}>
      <Image
              style={styles.imageOne}
              source={{
                uri: "https://lp-cms-production.imgix.net/2019-06/a2aa48e66952bf8816898991072e32f5-macritchie-reservoir.jpg",
              }}
            />
      <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 20, textAlign:"center" }}>
        Macritchie Reservoir
      </Text>
      <Text
        style={{ marginTop: 20, fontSize: 20, textAlign: "left", margin: 10 }}
      >
        Macritchie Resevoir is a wonderful place to spend your day with your
        family and friends. You can choose to hold a picnic with your buddies,
        or play some games with your children. Just remember to bring along
        mosquito repellent to avoid getting your body covered in mosquito bites!
      </Text>
      <Text
      style={{ fontsize: 15, }}
      >ALERT!: Please be aware that there was a Covid-19 cluster discovered here on the 10th of June. Refer to the MOH website for more details
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
