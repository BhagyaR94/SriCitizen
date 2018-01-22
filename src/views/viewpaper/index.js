import React, {Component} from 'react'
import {View, Button,ScrollView} from 'react-native'
import {AdMobBanner} from "react-native-admob";

class PaperIndex extends Component {
    static navigationOptions = {
        headerTitle:'News Papers',
        headerTitleStyle:{
          color:'#fff'
        },
        headerStyle:{
            backgroundColor:'#009688',
            alignContent:'center'
        },
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <ScrollView style={styles.containerStyle}>
                    <View style={styles.buttonStyle}>
                        <Button title="දිවයින E Paper"
                                onPress={() => navigate("ProfileScreen", {
                                    screen: "Divaina E Paper",
                                    paperUri: "http://www.divaina.com"
                                })}>
                        </Button>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title="Lakbima E Paper"
                                onPress={() => navigate("ProfileScreen", {
                                    screen: "Lakbima E Paper",
                                    paperUri: "http://www.lakbima.lk"
                                })}>
                        </Button>
                    </View>

                    <View style={styles.buttonStyle}>
                        <Button title="Lakbima E Paper"
                                onPress={() => navigate("ProfileScreen", {
                                    screen: "Lakbima E Paper",
                                    paperUri: "http://www.lakbima.lk"
                                })}>
                        </Button>
                    </View>

                    <View style={styles.buttonStyle}>
                        <Button title="Lakbima E Paper"
                                onPress={() => navigate("ProfileScreen", {
                                    screen: "Lakbima E Paper",
                                    paperUri: "http://www.lakbima.lk"
                                })}>
                        </Button>
                    </View>

                    <View style={styles.buttonStyle}>
                        <Button title="Lakbima E Paper"
                                onPress={() => navigate("ProfileScreen", {
                                    screen: "Lakbima E Paper",
                                    paperUri: "http://www.lakbima.lk"
                                })}>
                        </Button>
                    </View>
                </ScrollView>
                <View style={{flex: 0.1}}>
                    <AdMobBanner
                        adSize="smartBannerLandscape"
                        adUnitID="ca-app-pub-4625055388531278/4690344274"
                        testDevices={[AdMobBanner.simulatorId]}
                        onAdFailedToLoad={error => console.error(error)}
                    />
                </View>
            </View>
        );
    }
}


const styles = {
    containerStyle: {
        flex: 0.9,
        flexDirection: 'column',
        margin: 5,
    },
    buttonStyle: {
        flexDirection: 'column',
        margin: 5,
    }
};

export default PaperIndex;