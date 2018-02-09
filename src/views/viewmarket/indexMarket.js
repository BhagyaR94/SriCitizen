import React, {Component} from 'react';
import {View, Text} from 'react-native';

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
        return <View>
            <Text>MARKET VIEW</Text>
        </View>
    }

}

export default Market;