import {StackNavigator} from 'react-navigation';
import React from 'react';
import ProfileScreen from './src/views/ProfileScreen'
import HomeScreen from './src/views/HomeScreen'
import SplashScreen from "./src/views/SplashScreen";
import PaperIndex from './src/views/viewpaper/index';
import Preferences from "./src/views/viewpreferences/indexPrefs";

const RootNavigator = StackNavigator({
    SplashScreen: {screen: SplashScreen,locale:''},
    Preferences:{screen:Preferences,locale:''},
    HomeScreen: {screen: HomeScreen,locale:''},
    PaperIndex :{screen:PaperIndex,locale:''},
    ProfileScreen: {screen: ProfileScreen,locale:''}
});

export default RootNavigator;