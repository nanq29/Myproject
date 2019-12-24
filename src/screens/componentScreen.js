import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const componentScreen = () => {
    const name = 'Pnan'; 

    return (
    <View>
        <Text style={styles.textstyle}>Getting started with React Native</Text>
    <Text style={styles.textyourname}>My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create ({
    textstyle : {
        fontSize : 45,
    },
    textyourname : {
        fontSize : 20
    }
});

export default componentScreen;
