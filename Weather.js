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
        title:"Haze",
        subTitle:"공기중에 먼지가 많으니 마스크 필수!",
    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#373B44", "#4286f4"],
        title:"Thunderstorm",
        subTitle:"천둥번개가 극성이니 외출은 자제해주세요!",
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient:["#89F7FE", "#66A6FF"],
        title:"Drizzle",
        subTitle:"이슬비가 내리니 우산 챙겨가세요~",
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#00C6FB", "#005BEA"],
        title:"Rain",
        subTitle:"빗길운전 조심 언제나 조심!",
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#7DE2FC", "#B9B6E5"],
        title:"Snow",
        subTitle:"눈이 펑펑 내리니 든든하게 입구 가여~",
    },
    Atmosphere:{
        iconName:"weather-hail",
        gradient:["#89F7FE", "#66A6FF"],
        title:"Atmosphere",
        subTitle:"대기질이 좋지 않으니 외출은 자제해주세요!",
    },
    Mist:{
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"],
        title:"Mist",
        subTitle:"Just don't go outside.",
    },
    Dust:{
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"],
        title:"Dust",
        subTitle:"공기 중에 먼지가 많으니 마스크 필수!",
    },
    // Smoke:{
    //     iconName:"",
    //     gradient:[],
    //     title:"",
    //     subTitle:"",
    // },
    // Fog:{
    //     iconName:"",
    //     gradient:[],
    //     title:"",
    //     subTitle:"",
    // },
    // Sand:{
    //     iconName:"",
    //     gradient:[],
    //     title:"",
    //     subTitle:"",
    // },
    // Ash:{
    //     iconName:"",
    //     gradient:[],
    //     title:"",
    //     subTitle:"",
    // },
    // Squall:{
    //     iconName:"",
    //     gradient:[],
    //     title:"",
    //     subTitle:"",
    // },
    // Tornado:{
    //     iconName:"",
    //     gradient:[],
    //     title:"",
    //     subTitle:"",
    // },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#fe8c00", "#f83600"],
        title:"Clear",
        subTitle:"산책가기 좋은 날씨에요!",
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#83a4d4", "#b6fbff"],
        title:"Clouds",
        subTitle:"구름이 끼었어요!",
    }
};

export default function Weather({temp, condition}){
    console.log(temp, condition);
    return (

        <LinearGradient
        colors={weatherObject[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherObject[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp-273}ºC</Text>         
            </View>

            <View style={{...styles.halfContainer, ...styles.textContainer}}>             
                <Text style={styles.title}>{weatherObject[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherObject[condition].subTitle}</Text>
            
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
    },
    title:{
        alignSelf:"center",
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10,
    },
    subtitle:{
        alignSelf:"center",
        textAlign:"center",
        fontSize:28,
        fontWeight:"600",
        color:"white",
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start",
    }
})