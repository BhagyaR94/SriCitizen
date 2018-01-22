import React from 'react';
import {View, Button} from 'react-native';

const CardSection = () => {
    return (
        <View style={styles.containerStyle}>

        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        backgroundColor: '#ff0000',
        borderRadius: 5,
        margin: 5,
        shadowOffset: {width: 5, height: 5},
        elevation: 5,
        shadowColor: '#fff'
    }
};

export default CardSection;