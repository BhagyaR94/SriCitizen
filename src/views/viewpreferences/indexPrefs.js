import React, {Component} from 'react';
import {View, Button, TouchableHighlight, Text} from 'react-native';

class Preferences extends Component {

    static navigationOptions = {
        title: "",
        header: null,

    };

    constructor(props) {
        super(props);
        this.setToSinhalese = this.setToSinhalese.bind(this);
        this.setToTamil = this.setToTamil.bind(this);
        this.setToEnglish = this.setToEnglish.bind(this);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.containerStyles}>

                <View style={styles.subContainerStyles}>
                    <TouchableHighlight style={styles.buttonStyles}
                                        onPress={this.setToSinhalese}>
                        <Text style={styles.buttonTitleStyles}>සිං</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonStyles}
                                        onPress={this.setToTamil}>
                        <Text style={styles.buttonTitleStyles}>த</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonStyles}
                                        onPress={this.setToEnglish}>
                        <Text style={styles.buttonTitleStyles}>En</Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }

    setToSinhalese() {
        this.props.navigation.navigate('HomeScreen', {locale: 'si'});
    }

    setToTamil() {
        this.props.navigation.navigate('HomeScreen', {locale: 'ta'});
    }

    setToEnglish() {
        this.props.navigation.navigate('HomeScreen', {locale: 'en'});
    }
}


const styles = {

    containerStyles: {
        backgroundColor:'#009688',
        flex: 1,
        justifyContent: 'center',
    },
    buttonTitleStyles: {
        fontSize: 30,
        margin: 10,
        color:'#000',
    },
    buttonStyles: {
        backgroundColor:'#eee',
        borderColor:'#fff',
        borderWidth: 2,
        borderRadius: 5,
        marginStart: 5,
        marginEnd: 5,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    }, subContainerStyles: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

export default Preferences;