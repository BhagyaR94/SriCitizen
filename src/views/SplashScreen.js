import React, {Component} from 'react';
import {View, Image, Text, ActivityIndicator} from 'react-native';
import {AdMobInterstitial} from 'react-native-admob';

class SplashScreen extends Component {

    static navigationOptions = {
        title: "",
        header:null,
    };

    render() {

        const {navigate} = this.props.navigation;

        this.timeoutHandle = setTimeout(()=>{
            AdMobInterstitial.setAdUnitID('ca-app-pub-4625055388531278/5014627964');
            AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
            AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

            navigate("Preferences", {
                screen: "Main Menu"
            })
        }, 5000);

        return (
            <View style={styles.containerStyles}>
                <Text style={styles.headerStyles}>ශ්‍රී Citizen</Text>
                <Image style={styles.imageStyles} source={require('./../../assets/img/lion_face.png')}/>
                <Text style={styles.bottomTextStyles} >A Collection of Supportive Information</Text>
                <ActivityIndicator size="large" color="#FFF"/>
            </View>
        );
    }
}

const styles = {
    containerStyles: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#009688",
    },
    imageStyles: {
        borderWidth: 1,
        borderRadius: 10,
        width: 200,
        height: 200,
    },
    headerStyles: {
        textAlign: 'center',
        fontSize: 55,
        color: "#FFF",
        margin: 10,
    },
    bottomTextStyles: {
        textAlign: 'center',
        fontSize: 25,
        color: "#FFF",
        margin: 10,
    }
};


export default SplashScreen;