import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "ad6659336986e820d219260a8163858a";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude, longitude) => {
    const { data: {main: { temp }, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading: false, condition: weather[0].main, temp});
  }
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    }catch(error){
      Alert.alert("Can't find you", "Try again");
    } 
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp , condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={ Math.round(temp) } condition={ condition }/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
