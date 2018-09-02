import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
class ButtonComponent extends Component {

    render() {

        const {
            btnText,
        } = this.props;

        return (
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyles}>
                    {btnText}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    buttonStyle: {
        flexDirection: 'column',
        width: 75,
        height: 50,
        margin: 5,
        flex: 0.3,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyles: {
        fontSize: 15,
        margin: 2,
        textAlign: 'center',
        color: '#212121',
    }
};

export default ButtonComponent;