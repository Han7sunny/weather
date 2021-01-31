import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";

export default function Loading(){
    return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.text}>Today's weather</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-end",
        paddingHorizontal: 30,
        paddingVertical: 200,
        backgroundColor: '#eaafc8'
    },
    text :{
        color : "#2c2c2c",
        fontSize: 40
    }
})