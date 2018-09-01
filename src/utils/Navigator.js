import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import ProfileScreen from '../views/ProfileScreen'
import HomeScreen from '../views/HomeScreen'
import SplashScreen from "../views/SplashScreen";
import PaperIndex from '../views/viewpaper/index';
import Preferences from "../views/viewpreferences/indexPrefs";
import Market from "../views/viewmarket/indexMarket";

export const Navigator = new StackNavigator({
    SplashScreen: { screen: SplashScreen, locale: '' },
    Preferences: { screen: Preferences, locale: '' },
    HomeScreen: { screen: HomeScreen, locale: '' },
    PaperIndex: { screen: PaperIndex, locale: '' },
    ProfileScreen: { screen: ProfileScreen, locale: '' },
    MarketScreen: { screen: Market, locale: '' }
}, {
        initialRouteName: 'SplashScreen',
    })

class Nav extends Component {
    render() {
        return (
            // <Navigator navigation={addNavigationHelpers({
            //     dispatch: this.props.dispatch,
            //     state: this.props.navigation,
            // })} />
            <Navigator  />
        )
    }
}

const mapStateToProps = state => ({
    navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)