import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Hi there!!</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Component Demo"
      ></Button>
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate('List')}
      ></Button>
      <Button
        title="Go to Image Demo"
        onPress={() => props.navigation.navigate('Image')}
      ></Button>
      <Button
        title="Go to Counter Demo"
        onPress={() => props.navigation.navigate('Counter')}
      ></Button>
      <Button
        title="Go to Color Demo"
        onPress={() => props.navigation.navigate('Color')}
      ></Button>
      <Button
        title="Go to Square Demo"
        onPress={() => props.navigation.navigate('Square')}
      ></Button>
      <Button
        title="Go to Text Demo"
        onPress={() => props.navigation.navigate('Text')}
      ></Button>
      <Button
        title="Go to Box Demo"
        onPress={() => props.navigation.navigate('Box')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
