import {createStackNavigator} from 'react-navigation-stack';
import OwesMe from '../screens/owesMe';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: OwesMe,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="Someone owes me" />
                ),
            };
        },
    },
};

const OwesMeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#4CAF50', height: 60},
    },
});

export default OwesMeStack;
