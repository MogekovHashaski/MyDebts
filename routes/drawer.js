import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import MyDebtsStack from './myDebtsStack';
import OwesMeStack from './owesMeStack';

const RootDrawerNavigator = createDrawerNavigator({
    Main: {
        screen: HomeStack,
        navigationOptions: {
            drawerLabel: 'Main',
        },
    },
    MyDebts: {
        screen: MyDebtsStack,
        navigationOptions: {
            drawerLabel: 'My Debts',
        },
    },
    OwesMe: {
        screen: OwesMeStack,
        navigationOptions: {
            drawerLabel: 'Someone owes me',
        },
    },
});

export default createAppContainer(RootDrawerNavigator);
