import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import MyDebtsStack from './myDebtsStack';
import OwesMeStack from './owesMeStack';
import AddDebtsStack from './addDebtsStack';

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
    Add: {
        screen: AddDebtsStack,
        navigationOptions: {
            drawerLabel: 'Add new debts',
        },
    },
});

export default createAppContainer(RootDrawerNavigator);
