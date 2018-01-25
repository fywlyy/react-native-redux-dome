/**
 * Copyright (c) 2018-present, xp
 * All rights reserved.
 * 导航按钮图标组件
 * @flow
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Image} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import { Icon } from './CustomIcon.js';

class TabBarItem extends PureComponent {
    static propTypes = {
        iconName: PropTypes.any,
        focused: PropTypes.bool,
        tintColor: PropTypes.string
    }
    render() {
        let {iconName, focused, tintColor} = this.props;
        return (
            <Icon
                name={iconName}
                size={20}
                color={tintColor}
                />
        )
    }
}

export default TabBarItem;