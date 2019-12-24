import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ImageDatail from "../component/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDatail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={9}
      ></ImageDatail>
      <ImageDatail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={7}
      ></ImageDatail>
      <ImageDatail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={10}
      ></ImageDatail>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
