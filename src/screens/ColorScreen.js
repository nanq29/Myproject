import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const ColorScreen = () => {
  return (
    <View>
      <Button title = "Add Color "></Button>
      <View style ={{height : 100, width :100, backgroundColor : randomRgb() }}></View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random () *256);
  const blue = Math.floor(Math.random() * 256);

  return 'rgb (${red, green, blue})';
}

export default ColorScreen;