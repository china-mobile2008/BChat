/*
 * @Author: Mr.Zhang 
 * @Date: 2017-09-08 11:41:36 
 */

import React, {PureComponent} from "react";
import {Text} from "react-native";
import {Provider, connect} from "react-redux";
import {addNavigationHelpers} from "react-navigation";

import getStore from "./store";
import {AppNavigator} from './routers';

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const mapStateToProps = (state) => ({
    nav: state.nav
});

class App extends PureComponent {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(navReducer);

export default class Root extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
