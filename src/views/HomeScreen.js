import React, {Component} from 'react';
import {
    View,
    Button,
    NetInfo,
    Alert,
    BackHandler,
    ScrollView,
    TouchableHighlight,
    Image,
    Text
} from 'react-native';
import {AdMobBanner} from 'react-native-admob';
import LocalizedStrings from 'react-native-localization';


class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: "Main Menu",
        headerLeft: null,
        headerTitleStyle: {
            color: '#fff',
            justifyContent: 'center'
        },
        headerStyle: {
            backgroundColor: '#009688',
        },
    };

    render() {
        const {navigate} = this.props.navigation;

        console.log(this.props.navigation.state.params.locale);

        strings.setLanguage(this.props.navigation.state.params.locale);

        NetInfo.getConnectionInfo().then((connectionInfo) => {

            if (connectionInfo.type === 'none') {
                Alert.alert(
                    'No Connectivity',
                    'No Internet Connection! Please Connect Your Device for Better Experience.',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false}
                );
            }

            console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
        });

        function handleFirstConnectivityChange(connectionInfo) {
            console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
            NetInfo.removeEventListener(
                'connectionChange',
                handleFirstConnectivityChange
            );
        }

        NetInfo.addEventListener(
            'connectionChange',
            handleFirstConnectivityChange
        );

        BackHandler.addEventListener('hardwareBackPress', function () {
            Alert.alert(
                'Warning!',
                'You Are About to Exit.Are You Sure You Want To Continue?',
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'Exit', onPress: () => BackHandler.exitApp()},
                ],
                {cancelable: false}
            );
        });

        return (
            <View style={{flex: 1}}>
                <ScrollView style={styles.mainContainer}>
                    <View style={styles.containerStyle}>

                        <View style={styles.cardSectionStyle}>
                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{margin:10}}
                                                    onPress={() => navigate("PaperIndex", {
                                                        screen: "NewsPapers"
                                                    })}>
                                    <Image
                                        source={require('./../../assets/img/main_menu/paper.png')}
                                    />
                                </TouchableHighlight>
                                <Text style={styles.textStyles}>{strings.newspaper}</Text>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{margin:10}}
                                                    onPress={() => navigate("PaperIndex", {
                                                        screen: "NewsPapers"
                                                    })}>
                                    <Image
                                        source={require('./../../assets/img/main_menu/calendar.png')}
                                    />
                                </TouchableHighlight>
                                <Text style={styles.textStyles}>{strings.holidays}</Text>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{margin:10}}
                                                    onPress={() => navigate("PaperIndex", {
                                                        screen: "NewsPapers"
                                                    })}>
                                    <Image
                                        source={require('./../../assets/img/main_menu/telephone.png')}
                                    />
                                </TouchableHighlight>
                                <Text style={styles.textStyles}>{strings.telephone}</Text>
                            </View>

                        </View>

                        <View style={styles.cardSectionStyle}>
                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{margin:10}}
                                                    onPress={() => navigate("PaperIndex", {
                                                        screen: "NewsPapers"
                                                    })}>
                                    <Image
                                        source={require('./../../assets/img/main_menu/market.png')}
                                    />
                                </TouchableHighlight>
                                <Text style={styles.textStyles}>{strings.market}</Text>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{margin:10}}
                                                    onPress={() => navigate("PaperIndex", {
                                                        screen: "NewsPapers"
                                                    })}>
                                    <Image
                                        source={require('./../../assets/img/main_menu/lightning.png')}
                                    />
                                </TouchableHighlight>
                                <Text style={styles.textStyles}>{strings.weather}</Text>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{margin:10}}
                                                    onPress={() => navigate("PaperIndex", {
                                                        screen: "NewsPapers"
                                                    })}>
                                    <Image
                                        source={require('./../../assets/img/main_menu/zodiac.png')}
                                    />
                                </TouchableHighlight>
                                <Text style={styles.textStyles}>{strings.zodiac}</Text>
                            </View>

                        </View>

                    </View>
                </ScrollView>

                <View style={{flex: 0.1, margin: 1}}>
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
    mainContainer: {
        flex: 0.9,
    },
    containerStyle: {
        flexDirection: 'column',
        margin: 5,
        flex: 0.9,
        alignItems: 'center'
    },
    cardSectionStyle: {
        flexDirection: 'row',
        flex: 0.3,
        margin: 5,
    },
    buttonStyle: {
        flexDirection: 'column',
        margin: 5,
        flex: 0.3,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center'
    },
    textStyles: {
        fontSize: 15,
        margin: 2,
        textAlign: 'center',
        color: '#212121',
    }
};


let strings = new LocalizedStrings({
    en: {
        newspaper: "News Papers",
        market: "Market",
        weather: "Weather",
        zodiac: "Zodiac Fortunes",
        telephone: "Telephone Numbers",
        holidays: "Special Holidays"

    },
    si: {
        newspaper: "පුවත්පත්",
        market: "වෙළඳපොළ",
        weather: "කාලගුණ",
        zodiac: "ලග්න තොරතුරු",
        telephone: "විශේෂ දුරකථන අංක",
        holidays: "විශේෂ නිවාඩු"
    },
    ta: {
        newspaper: "News Papers",
        market: "Market",
        weather: "Weather",
        zodiac: "Zodiac Fortunes",
        telephone: "Telephone Numbers",
        holidays: "Special Holidays"
    }
});

export default HomeScreen;