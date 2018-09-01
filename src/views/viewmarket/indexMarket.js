import React, {Component} from 'react';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import {AdMobBanner} from "react-native-admob";
import LocalizedStrings from 'react-native-localization';

class Market extends Component {

    static navigationOptions = {
        headerTitle: "Market",
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
        strings.setLanguage(this.props.navigation.state.params.locale);
        return <View style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.containerStyle}>
                    <View style={styles.cardSectionStyle}>
                        <View style={styles.buttonStyles}>
                            <TouchableHighlight style={{margin: 10}}
                                                onPress={() => navigate("MarketScreen", {
                                                    screen: "NewsPapers"
                                                })}>
                                <View>

                                    <Text style={styles.textStyles}>{strings.market}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonStyles}>
                            <TouchableHighlight style={{margin: 10}}
                                                onPress={() => navigate("MarketScreen", {
                                                    screen: "NewsPapers"
                                                })}>
                                <View>

                                    <Text style={styles.textStyles}>{strings.market}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonStyles}>
                            <TouchableHighlight style={{margin: 10}}
                                                onPress={() => navigate("MarketScreen", {
                                                    screen: "NewsPapers"
                                                })}>
                                <View>

                                    <Text style={styles.textStyles}>{strings.market}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex: 0.1}}>
                <AdMobBanner
                    adSize="smartBannerLandscape"
                    adUnitID="ca-app-pub-4625055388531278/4690344274"
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        </View>
    }

}

const styles = {
    mainContainer: {
        flex: 0.9,
        flexDirection: 'row',
        borderWidth: 2,
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
}

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

export default Market;