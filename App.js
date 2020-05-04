import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInternal from './src/components/molecules/GoInternal';
import GoBanner from './src/components/molecules/GoBanner';
import AllProduct from './src/containers/organisms/AllProduct';
import Navbar from './src/containers/organisms/Navbar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGopayFeuture from './src/containers/organisms/HomeGopayFeuture';

import Router from './src/config/router'

class App extends Component {
  render() {
    return (
      <Router></Router>
    )
  }
}

export default App;
