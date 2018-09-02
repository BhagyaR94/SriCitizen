import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
class ButtonComponent extends Component {

    render() {
        return (
            <TouchableOpacity>
                <Text>Click me</Text>
            </TouchableOpacity>
        );
    }
}

export default ButtonComponent;