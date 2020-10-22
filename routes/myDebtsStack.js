import {createStackNavigator} from 'react-navigation-stack';
import MyDebts from '../screens/myDebts';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: MyDebts,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="My Debts" />
                ),
            };
        },
    },
};

const MyDebtsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#4CAF50', height: 60},
    },
});

export default MyDebtsStack;
