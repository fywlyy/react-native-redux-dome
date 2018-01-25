/**
 * Copyright (c) 2018-present, xp
 * All rights reserved.
 * 首页
 * @flow
 */

import React, { PureComponent } from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

class HomeScence extends PureComponent {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>首页</Text>  
                <Image 
                    source={require('../../asset/images/home_icon_select.png')}
                    style={{width: 100, height: 100}} />
                <Button title="点击进入Web页" onPress={() => {
                    this.props.navigation.navigate('WebScene',{url: 'http://www.baidu.com'})
                }} />
                <Button title="点击进入登陆页" onPress={() => {
                    this.props.navigation.navigate('Login')
                }} />
            </View>    
        )
    }
}

export default HomeScence;