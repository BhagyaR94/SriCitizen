const WEBVIEW_REF = "WEBVIEW_REF";
import React, {Component} from 'react';
import {View, Button, WebView, TouchableOpacity, Text, BackHandler} from 'react-native';

class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {canGoBack: false};
    }


    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.screen,
            headerLeft: (
                <Button title={"Back"}
                />
            ),
        }
    };

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack
        });
    }

    onBack() {
        this.refs[WEBVIEW_REF].goBack();
    }


    render() {
        const {state, navigate} = this.props.navigation;

        return (
            <View style={{flex: 2}}>

                <View>
                    <TouchableOpacity
                        disabled={!this.state.canGoBack}
                        visibility={!this.state.canGoBack}
                        onPress={this.onBack.bind(this)}
                    >
                        <Text style={{justifyContent: 'flex-start', fontSize: 20}}>Go Back</Text>
                    </TouchableOpacity>
                </View>

                <WebView
                    ref={WEBVIEW_REF}
                    source={{uri: state.params.paperUri}}
                    onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                />
            </View>
        );
    }
};

export default ProfileScreen;