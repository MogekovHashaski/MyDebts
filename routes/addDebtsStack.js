import AddDebts from '../screens/addDebts';
import Header from '../shared/header';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

const screens = {
    Add: {
        screen: AddDebts,
        navigationOptions: (navigation) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title={'Add new debts'} />
                ),
            };
        },
    },
};

const AddDebtsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#4CAF50', height: 60},
    },
});

export default AddDebtsStack;
