/**
 * Copyright (c) 2018-present, xp
 * All rights reserved.
 * 计算页
 * @flow
 */
import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Counter from '../../widget/Counter';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import *as counterAction from '../../actions/counterAction';
import *as loginAction from '../../actions/loginAction';// 导入action方法

class MainPage extends PureComponent {
    render() {
        const { count, incrementFn, decrementFn, logout } = this.props;
        return (
            <View style={styles.container}>
                <Counter incrementFn={incrementFn} decrementFn={decrementFn} counter={count}>
                </Counter>
                <TouchableOpacity onPress={logout} style={{ marginTop: 50 }}>
                    <View>
                        <Text>退出登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FFFF'
    }
})

export default connect(
    (state) => ({
        count: state.counter.count,
    }),
    (dispatch) => ({
        incrementFn: () => dispatch(counterAction.increment()),
        decrementFn: () => dispatch(counterAction.decrement()),
        logout: () => {
            dispatch(loginAction.logout());
            dispatch(NavigationActions.back())
        }
    })
)(MainPage)
