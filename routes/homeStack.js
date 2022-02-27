import {createStackNavigator} from 'react-navigation-stack';
import Main from '../screens/main';
import About from '../screens/myDebts';
import Header from '../shared/header';
import React from 'react';
import {StatusBar} from 'react-native';

const screens = {
    Main: {
        screen: Main,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="Main" />
                ),
            };
        },
    },
    /*About: {
        screen: About,
        navigationOptions: {
            title: 'About MyDebts',
        },
    },*/
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#4CAF50', height: 60},
    },
});

export default HomeStack;
