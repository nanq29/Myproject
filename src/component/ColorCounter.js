import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, OnIncrease, OnDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => OnIncrease()}
        title={"Increase ${color} "}
      ></Button>
      <Button onPress={() => OnDecrease()} title={"Decrease ${color"}></Button>
    </View>
  );
};

export default ColorCounter;
