import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/utils/Navigator';
import store from './store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}