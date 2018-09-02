import React, { Component } from 'react';
import {
    View,
    AsyncStorage,
    NetInfo,
    Alert,
    BackHandler,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { AdMobBanner } from 'react-native-admob';
import LocalizedStrings from 'react-native-localization';
import * as actions from '../actions/';
import { connect } from 'react-redux';
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

    componentWillMount() {
        this.method1();
    }

    method1 = async () => {
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

                {/* <ActivityIndicator size="large" color="#0000ff" style={{position:'relative',justifyContent:'space-around'}} /> */}

                <View style={styles.carouselContainer}>

                </View>
                <View style={styles.tileContainer}>
                    <ScrollView style={styles.mainContainer}>
                        <View style={styles.containerStyle}>

                            <View style={styles.cardSectionStyle}>

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                    onPress={() => { this.gotoPage('PaperIndex', 'NewsPapers') }}
                                />

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                    onPress={() => { this.gotoPage('PaperIndex', 'NewsPapers1234') }}
                                />

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={this.gotoPage('sample1', 'sample1')}
                                />

                            </View>

                            <View style={styles.cardSectionStyle}>

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={() => this.gotoPage('PaperIndex', 'NewsPapers')}
                                />

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={this.gotoPage('sample1', 'sample1')}
                                />

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={this.gotoPage('sample1', 'sample1')}
                                />

                            </View>

                            <View style={styles.cardSectionStyle}>

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={() => { this.gotoPage('PaperIndex', 'NewsPapers') }}
                                />

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={this.gotoPage('sample1', 'sample1')}
                                />

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={this.gotoPage('sample1', 'sample1')}
                                />

                            </View>

                            <View style={styles.cardSectionStyle}>

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={() => { this.gotoPage('PaperIndex', 'NewsPapers') }}
                                />

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={this.gotoPage('sample1', 'sample1')}
                                />

                                <TileComponent
                                    btnText={'Sample 123 here'}
                                // onPress={this.gotoPage('sample1', 'sample1')}
                                />

                            </View>

                        </View>
                    </ScrollView>
                </View>



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
        flexDirection: 'column'
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
    }, carouselContainer: {
        flex: 0.3
    },
    tileContainer: {
        flex: 0.7
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