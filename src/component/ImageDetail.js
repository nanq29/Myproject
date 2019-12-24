import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({imageSource, score, title}) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text> {title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
