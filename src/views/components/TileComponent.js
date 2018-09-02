import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
class TileComponent extends Component {

    render() {
        const {
            imageName,
            btnText,
            onPress,
        } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                <View style={styles.tileContainer}>
                    <Image style={styles.imageStyle}
                        source={require('./../../../assets/img/main_menu/paper.png')}
                    />
                    <Text style={styles.textStyles}>
                        {btnText}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    buttonStyle: {
        flexDirection: 'column',
        width: 100,
        height: 150,
        margin: 5,
        flex: 0.3,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center'
    },
    tileContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    textStyles: {
        fontSize: 15,
        margin: 2,
        textAlign: 'center',
        color: '#212121',
    },
    imageStyle: {
        // justifyContent: 'center'
    }
};

export default TileComponent;