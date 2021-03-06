import React, { Component } from 'react';
import {
    View,
    AsyncStorage,
    NetInfo,
    Alert,
    BackHandler,
    ScrollView,
    TouchableHighlight,
    Image,
    Text
} from 'react-native';
import { AdMobBanner } from 'react-native-admob';
import LocalizedStrings from 'react-native-localization';
import * as actions from '../actions/';
import { connect } from 'react-redux';
import ButtonComponent from './components/ButtonComponent';
import TileComponent from './components/TileComponent';

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

    constructor(props) {
        super(props);
        this.state = {
            sample123: '',
        }
    }

    componentDidMount() {
        this._method1();
    }

    _method1 = async () => {
        try {
            let user = await AsyncStorage.getItem('@MySuperStore:key').then();
            console.log("HELLO" + user);
        }
        catch (error) {
            console.log("ERROR OCCURED" + error);
        }
    }

    gotoPage(screenName, screenTitle) {
        const { navigate } = this.props.navigation;
        navigate(
            screenName, {
                screen: screenTitle
            });
    }

    render() {

        const { navigate } = this.props.navigation;
        strings.setLanguage(this.props.navigation.state.params.locale);
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            if (connectionInfo.type === 'none') {
                Alert.alert(
                    'No Connectivity',
                    'No Internet Connection! Please Connect Your Device for Better Experience.',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
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
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'Exit', onPress: () => BackHandler.exitApp() },
                ],
                { cancelable: false }
            );
        });

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.mainContainer}>
                    <View style={styles.containerStyle}>
                        {/* <ButtonComponent
                            btnText={'Sample 123 here'}
                        />
                        <TileComponent
                            btnText={'Sample 123 here'}
                        /> */}
                        {/* First Row */}
                        <View style={styles.cardSectionStyle}>

                            <TileComponent
                                btnText={'Sample 123 here'}
                            />

                            <TileComponent
                                btnText={'Sample 123 here'}
                            />

                            <TileComponent
                                btnText={'Sample 123 here'}
                            /> 
                            {/* sample */}
                            
                        </View>
                        {/* End of First Row */}

                        {/* Second Row */}
                        <View style={styles.cardSectionStyle}>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{ margin: 10 }}
                                    onPress={() => navigate("MarketScreen", {
                                        screen: "NewsPapers"
                                    })}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/main_menu/market.png')}
                                        />
                                        <Text style={styles.textStyles}>{strings.market}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{ margin: 10 }}
                                    onPress={() => navigate("PaperIndex", {
                                        screen: "NewsPapers"
                                    })}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/main_menu/lightning.png')}
                                        />
                                        <Text style={styles.textStyles}>{strings.weather}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{ margin: 10 }}
                                    onPress={() => navigate("PaperIndex", {
                                        screen: "NewsPapers"
                                    })}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/main_menu/zodiac.png')}
                                        />
                                        <Text style={styles.textStyles}>{strings.zodiac}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                        </View>
                        {/* End of Second Row */}

                        {/* Third Row */}
                        <View style={styles.cardSectionStyle}>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{ margin: 10 }}
                                    onPress={() => navigate("PaperIndex", {
                                        screen: "NewsPapers"
                                    })}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/main_menu/market.png')}
                                        />
                                        <Text style={styles.textStyles}>{strings.market}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{ margin: 10 }}
                                    onPress={() => navigate("PaperIndex", {
                                        screen: "NewsPapers"
                                    })}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/main_menu/lightning.png')}
                                        />
                                        <Text style={styles.textStyles}>{strings.weather}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{ margin: 10 }}
                                    onPress={() => navigate("PaperIndex", {
                                        screen: "NewsPapers"
                                    })}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/main_menu/zodiac.png')}
                                        />
                                        <Text style={styles.textStyles}>{strings.zodiac}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                        </View>
                        {/* End of Third Row */}

                        {/* Fourth Row */}
                        <View style={styles.cardSectionStyle}>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{ margin: 10 }}
                                    onPress={() => navigate("PaperIndex", {
                                        screen: "NewsPapers"
                                    })}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/main_menu/market.png')}
                                        />
                                        <Text style={styles.textStyles}>{strings.market}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{ margin: 10 }}
                                    onPress={() => navigate("PaperIndex", {
                                        screen: "NewsPapers"
                                    })}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/main_menu/lightning.png')}
                                        />
                                        <Text style={styles.textStyles}>{strings.weather}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableHighlight style={{ margin: 10 }}
                                    onPress={() => navigate("PaperIndex", {
                                        screen: "NewsPapers"
                                    })}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/main_menu/zodiac.png')}
                                        />
                                        <Text style={styles.textStyles}>{strings.zodiac}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                        </View>
                        {/* End of Fourth Row */}

                    </View>
                </ScrollView>

                <View style={{ flex: 0.1, margin: 1 }}>
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

const mapStateToProps = (state) => {
    console.log('***************************************');
    console.log('MAP STATE TO PROPS' + JSON.stringify(state.news));
    console.log('***************************************');
    const newsPapers = state.news;
    // const newsPapers = '';
    return { newsPapers }
};

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
        headerText: "Main Menu",
        newspaper: "News Papers",
        market: "Market",
        weather: "Weather",
        zodiac: "Zodiac Fortunes",
        telephone: "Telephone Numbers",
        holidays: "Special Holidays"
    },
    si: {
        headerText: "ප්‍රධාන මෙනුව",
        newspaper: "පුවත්පත්",
        market: "වෙළඳපොළ",
        weather: "කාලගුණ",
        zodiac: "ලග්න තොරතුරු",
        telephone: "විශේෂ දුරකථන අංක",
        holidays: "විශේෂ නිවාඩු"
    },
    ta: {
        headerText: "Main Menu",
        newspaper: "News Papers",
        market: "Market",
        weather: "Weather",
        zodiac: "Zodiac Fortunes",
        telephone: "Telephone Numbers",
        holidays: "Special Holidays"
    }
});

export default connect(mapStateToProps, actions)(HomeScreen);