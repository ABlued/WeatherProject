import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Feather } from '@expo/vector-icons'; 

export default function Weather({temp}){
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Feather name="cloud-rain" size={96} color="black" />
                <Text style={styles.temp}>{temp}º</Text>         
            </View>
            <View style={styles.halfContainer}>
    
            </View>
        </View>
    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds",
    ]).isRequired
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent : "center",
        alignItems:"center",
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    temp:{
        fontSize: 42,
    }
})