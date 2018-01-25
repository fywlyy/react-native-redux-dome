/**
 * Copyright (c) 2018-present, xp
 * All rights reserved.
 * Tab组件
 * @flow
 */
import React, { PureComponent } from 'react';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import TabBarItem from './TabBarItem';
import HomeScene from '../scene/Home/HomeScene';
import NearbyScene from '../scene/Nearby/NearbyScene';
import OrderScene from '../scene/Order/OrderScene';
import MineScene from '../scene/Mine/MineScene';

const TabNav = TabNavigator({
    Home: {
        screen: HomeScene,
        navigationOptions: () => ({
            headerTitle: '首页1',
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    iconName='customIcon|ct_home'
                />   
            )
        })
    },
    Nearby: {
        screen: NearbyScene,
        navigationOptions: () => ({
            headerTitle: '附近',
            tabBarLabel: '附近',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    iconName='customIcon|ct_location'
                />     
            )
        })
    },
    Order: {
        screen: OrderScene,
        navigationOptions: () => ({
            headerTitle: '订单',
            tabBarLabel: '订单',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    iconName='customIcon|ct_order'
                />     
            )
        })
    },
    Mine: {
        screen: MineScene,
        navigationOptions: () => ({
            headerTitle: '我的',
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    iconName='customIcon|ct_person'
                />      
            )
        })
    }
},{
    TabBarComponent: TabBarItem,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        style: {
            height:49,
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#ccc'
        },
        activeBackgroundColor:'#f0f0f0',
        activeTintColor:'#d81e06',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#333',
        showIcon: true,
        iconStyle: {
            top: -2
        },
        labelStyle: {
            top: -3,
            margin: 0,
            fontSize: 10
        }
    }
})

export default TabNav;