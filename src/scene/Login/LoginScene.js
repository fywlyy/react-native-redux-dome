import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import *as loginAction from '../../actions/loginAction';// 导入action方法
import { NavigationActions } from 'react-navigation';

class LoginPage extends PureComponent {
    componentDidUpdate() {
        const { loginScreen, isSuccess } = this.props;
        if (isSuccess) {
            loginScreen();
        }
    }
    render() {
        const { login, status } = this.props;
        return (
            <View style={styles.container}>
                <Text>状态: {status}</Text>
                <TouchableOpacity onPress={login} style={{ marginTop: 50 }}>
                    <View style={styles.loginBtn}>
                        <Text>登录</Text>
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
        backgroundColor: '#F5FCFF'
    },
    loginBtn: {
        borderWidth: 1,
        padding: 5,
    }
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: () => dispatch(loginAction.login()),
        loginScreen: () =>
            dispatch(NavigationActions.navigate({ routeName: 'Counter' })),
    })
)(LoginPage)
