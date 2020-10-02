import React from 'react';
import {Alert} from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./loading";
import axios from "axios";
import * as Location from 'expo-location';

const API_KEY = "a72b4fa53125a6cfcb6c0909aa496d09";


export default class extends React.Component{
  state = {
    isLoading : true
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);
  };
  
  getLocation = async () =>{
    try {
      await Location.requestPermissionsAsync(); 
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading:true})
    } catch (error) {
      Alert.alert("Can't find you","So sad");
    }
   
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
