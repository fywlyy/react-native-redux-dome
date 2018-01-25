/**
 * Copyright (c) 2018-present, xp
 * All rights reserved.
 * 自定义图标字体
 * @flow
 */
import {createIconSet} from 'react-native-vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const glyphMap = {
    ct_order: 58933,
    ct_home: 58906,
    ct_person: 58905,
    ct_location: 58891
}

const OIcon = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

const iconMap = {
    fontAwesome: FontAwesome,
    customIcon: OIcon
}

class Icon extends Component {

    render() {
        const {name, size, color} = this.props;
        if (!name.includes('|')) {
            throw new Error('name 解析错误！');
            return null
        }
        let nameArr = name.split('|');
        let fontlib = nameArr[0];
        let font = nameArr[1];
        let CustomIcon = iconMap[fontlib];
        if (!CustomIcon) throw new Error('没有找到匹配的font库，请review代码！');
        return (
            <CustomIcon name={font} size={size} color={color}/>
        )
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export {Icon}
