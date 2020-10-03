import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Feather } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const weatherObject = {
    Haze: {
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"],
    },
    Thunderstorm:{
        iconName:"",
        gradient:[],
    },
    Drizzle:{
        iconName:"",
        gradient:[],
    },
    Rain:{
        iconName:"",
        gradient:[],
    },
    Snow:{
        iconName:"",
        gradient:[],
    },
    Atmosphere:{
        iconName:"",
        gradient:[],
    },
    Mist:{
        iconName:"",
        gradient:[],
    },
    Smoke:{
        iconName:"",
        gradient:[],
    },
    Haze:{
        iconName:"",
        gradient:[],
    },
    Dust:{
        iconName:"",
        gradient:[],
    },
    Fog:{
        iconName:"",
        gradient:[],
    },
    Sand:{
        iconName:"",
        gradient:[],
    },
    Ash:{
        iconName:"",
        gradient:[],
    },
    Squall:{
        iconName:"",
        gradient:[],
    },
    Tornado:{
        iconName:"",
        gradient:[],
    },
    Clear:{
        iconName:"",
        gradient:[],
    },
    Clouds:{
        iconName:"",
        gradient:[],
    }
};

export default function Weather({temp}){
    return (
        <LinearGradient
        colors={weatherObject["Haze"].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>

            <View style={styles.halfContainer}>
                <Feather name={weatherObject["Haze"].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp-273}ºC</Text>         
            </View>

            <View style={styles.halfContainer}>     
            </View>

            </LinearGradient>
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
        padding: 15, 
        alignItems: 'center',
        borderRadius: 5,
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    temp:{
        fontSize: 42,
        color:"white",
    }
})