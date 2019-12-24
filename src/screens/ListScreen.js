import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 12 },
    { name: "Friend #2", age: 12 },
    { name: "Friend #3", age: 12 },
    { name: "Friend #4", age: 12 },
    { name: "Friend #5", age: 12 },
    { name: "Friend #6", age: 12 },
    { name: "Friend #7", age: 12 },
    { name: "Friend #8", age: 12 },
    { name: "Friend #9", age: 12 },
    { name: "Friend #10", age: 20 }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textstyle}>
            {item.name} - Age {item.age}
           </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textstyle: {
    marginVertical: 20
  }
});

export default ListScreen;
