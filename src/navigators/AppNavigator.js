import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, Button } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import *as loginAction from '../actions/loginAction';// 导入action方法

import TabNav from '../widget/TabNav';
import WebScene from '../scene/Web/WebScene';
import LoginScreen from '../scene/Login/LoginScene';
import MainScreen from '../scene/Counter/CounterScene';

export const AppNavigator = StackNavigator({
    App: {
        screen: TabNav
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerTitle: '登陆',
            headerRight: (<Button title="" color="transparent" onPress={() => {}} />)
        }
    },
    Counter: {
        screen: MainScreen,
        navigationOptions: {
            headerTitle: '计算',
            headerRight: (<Button title="" color="transparent" onPress={() => {}} />)
        }
    },
    WebScene: {
        screen: WebScene,
        navigationOptions: {
            headerTitle: 'Web',
            headerRight: (<Button title="" color="transparent" onPress={() => {}} />)
        }
    }
}, {
    navigationOptions: {
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerTintColor: '#d81e06',
        headerBackTitle: null
    },
    /**
     * 页面切换完成回调
     * @param navigation
     */
    onTransitionEnd: ({ navigation }) => {
        let { dispatch, state } = navigation;
        if (state.index == 1) {//判断页面切换完成后的页面路由length是否为1，即登陆页
            dispatch(loginAction.logout());
        }
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
