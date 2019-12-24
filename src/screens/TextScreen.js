import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { render } from "react-dom";


const TextScreen = () => {
//   const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      ></TextInput>
      {password.length < 4 ? <Text>Password must be 4 character</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
