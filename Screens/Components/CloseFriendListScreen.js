import * as React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";

export default function CloseFriendListScreen() {
  const simpleAlert = () => {
    alert(
      "Warning!!! Please be aware that there was a Covid-19 cluster detected here on 10 June 2021, please refer to the MOH website for more info "
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignSelf: "center",
          width: "95%",
          backgroundColor: "#ffa270",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          height: 120,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Members:</Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.members}>Reyes</Text>
          <Text style={styles.members}>Samuel</Text>
          <Text style={styles.members}>Zheng Jia</Text>
          <Text style={styles.members}>Xin Yan</Text>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 12 }}>
          <Text style={styles.members}>Adrienne</Text>
          <Text style={styles.members}>Jaimie</Text>
          <Text style={styles.members}>Jia Zheng</Text>
          <Text style={styles.members}>Yan Xin</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          alignSelf: "center",
          width: "95%",
          backgroundColor: "#ffa270",
          alignContent: "center",
          alignItems: "center",
          height: 550,
          borderRadius: 10,
          flexDirection: "column",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 10 }}>
          Events Planned:
        </Text>
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <View>
            <Text style={{ fontSize: 25 }}>Macritchie</Text>
            <Text style={{ fontSize: 25 }}>Reservoir</Text>
          </View>
          <Image
            style={{ height: 120, width: 170, marginLeft: 10 }}
            source={{
              uri: "https://lp-cms-production.imgix.net/2019-06/a2aa48e66952bf8816898991072e32f5-macritchie-reservoir.jpg",
            }}
          ></Image>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontSize: 25 }}>Date: 19 June 2021</Text>
        </View>
        <Text style={{ margin: 20, fontSize: 20 }}>
          Macritchie Resevoir is a wonderful place to spend your day with your
          family and friends. You can choose to hold a picnic with your buddies,
          or play some games with your children. Just remember to bring along
          mosquito repellent to avoid getting your body covered in mosquito
          bites!
        </Text>

        <Text style={{ fontSize: 20, marginTop: 6 }}>Is this Place safe?</Text>
        <Button title="Click on me to find out!!!" onPress={simpleAlert} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  members: {
    fontSize: 20,
    marginLeft: 20,
  },
});
