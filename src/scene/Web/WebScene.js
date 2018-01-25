/**
 * Copyright (c) 2018-present, xp
 * All rights reserved.
 * web页
 * @flow
 */

import React, { PureComponent } from 'react';
import {StyleSheet, Text, View} from 'react-native';

class WebScence extends PureComponent {
    constructor(props){
        super(props);
        
        alert('url: ' + this.props.navigation.state.params.url);
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Web</Text>    
            </View>    
        )
    }
}

export default WebScence;