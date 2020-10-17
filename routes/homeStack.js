import {createStackNavigator} from 'react-navigation-stack';
import Main from '../screens/main';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Main: {
        screen: Main,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="My Debts" />
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
        headerStyle: {backgroundColor: 'yellow', height: 60},
    },
});

export default HomeStack;
