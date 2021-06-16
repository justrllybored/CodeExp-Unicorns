import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import { createStackNavigator } from "@react-navigation/stack";

const db = SQLite.openDatabase("BookMarks.db");
const SAMPLE_BookMarks = [
  { title: "Macritchie", id: "0", done: false },
  { title: "Japanese Cemetary Park", id: "1", done: false },
  { title: "Little India", id: "2", done: false },
  { title: "Conney Island", id: "3", done: false },
];

function BookMarksScreen({ route, navigation }) {
  const [BookMarks, setBookMarks] = useState(SAMPLE_BookMarks);

  function refreshBookMarks() {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM BookMarks",
        null,
        (txObj, { rows: { _array } }) => setBookMarks(_array),
        (txObj, error) => console.log("Error ", error)
      );
    });
  }

  // Create the DB on first run
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(`
        CREATE TABLE IF NOT EXISTS BookMarks
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          done INT);
      `);
      },
      null,
      refreshBookMarks
    );
  }, []);

  // Adds the + button in the top right
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <Foundation
            style={{ marginRight: 20 }}
            name="book-bookmark"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  });

  // Responds to coming back from the add screen
  useEffect(() => {
    if (route.params?.todoText) {
      const newBookMark = {
        title: route.params.todoText,
        id: BookMarks.length.toString(),
        done: false,
      };
      setBookMarks([...BookMarks, newBookMark]);
      // const newBookMark = {
      //   title: route.params.todoText,
      //   id: BookMarks.length.toString(),
      //   done: false,
      // };
      // setBookMarks([...BookMarks, newBookMark]);
      db.transaction(
        (tx) => {
          tx.executeSql("INSERT INTO BookMarks (done, title) VALUES (0, ?)", [
            route.params.todoText,
          ]);
        },
        null,
        refreshBookMarks
      );
    }
  }, [route.params?.todoText]);

  function renderItem({ item }) {
    return (
      <View style={styles.listItem}>
        <Text>{item.title}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={BookMarks} renderItem={renderItem} />
    </View>
  );
}

function AddScreen({ navigation }) {
  const [todoText, setTodoText] = useState("");
  return (
    <View style={styles.container}>
      <Text>Add a bookmark</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setTodoText(text)}
      />
      <Button
        onPress={() => navigation.navigate("BookMarks", { todoText })}
        title="Submit"
      />
      <Button onPress={() => navigation.goBack()} title="Cancel" />
      <Text>{todoText}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function BookMarkStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookMarks" component={BookMarksScreen} />
      <Stack.Screen name="Add" component={AddScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cdd",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  headerStyle: {
    height: 80,
    backgroundColor: "#aa9",
    borderBottomWidth: 3,
    borderBottomColor: "green",
  },
  list: {
    width: "100%",
  },
  listItem: {
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    paddingLeft: 20,
  },
  textInput: {
    borderColor: "black",
    padding: 5,
    backgroundColor: "white",
    marginTop: 10,
    width: "90%",
  },
});
