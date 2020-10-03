import React from 'react';
import {Alert} from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./loading";
import axios from "axios";
import * as Location from 'expo-location';
import Weather from './Weather';


const API_KEY = "a72b4fa53125a6cfcb6c0909aa496d09";


export default class extends React.Component{
  state = {
    isLoading : true,

  };
  getWeather = async(latitude, longitude) => {
    const {
       data : {
         main: {temp},
         weather
       }} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    this.setState({isLoading: false, condition: weather[0].main, temp})
    // console.log(temp);
  };
  
  getLocation = async () =>{
    try {
      await Location.requestPermissionsAsync(); 
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading:false})
    } catch (error) {
      Alert.alert("Can't find you","So sad");
    }
   
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
