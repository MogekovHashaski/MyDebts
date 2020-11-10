import {
    Text,
    ScrollView,
    SafeAreaView,
    Switch,
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-material-dropdown';

const App = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const [value, onChangeText] = React.useState('');
    let currency = [
        {
            label: 'RUB',
            value: 1,
        },
        {
            label: 'USD',
            value: 2,
        },
        {
            label: 'EUR',
            value: 3,
        },
        {
            label: 'NZD',
            value: 4,
        },
    ];
    /* const state = {
        ddlSelectedValue: 1,
    };
    const setSelectedStateValue = (ddlValue) => {
        this.setState({
            ddlSelectedValue: ddlValue,
        });
    };*/

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Switch
                        trackColor={{false: '#767577', true: '#4CAF50'}}
                        thumbColor={isEnabled ? '#087F23' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={styles.switchButton}
                    />
                    <Text style={styles.text}>I am the debtor</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => onChangeText(text)}
                        value={value}
                        placeholder="Creditor name"
                    />
                </View>
                <View style={{justifyContent: 'center'}}>
                    <Text style={styles.text}>Date is not selected</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 50}}>
                    <TextInput
                        style={{
                            marginTop: 24,
                            marginLeft: 20,
                            marginRight: 80,
                            height: 50,
                            borderBottomColor: '#000',
                            borderBottomWidth: 1,
                            width: 200,
                        }}
                        onChangeText={(text) => onChangeText(text)}
                        value={value}
                        placeholder="Sum"
                    />
                    <Dropdown
                        value={1}
                        data={currency}
                        style={{marginLeft: 40}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    switchButton: {
        marginLeft: 20,
        marginTop: 40,
    },
    text: {
        marginLeft: 20,
        marginTop: 43,
        fontSize: 16,
    },
    textInput: {
        marginTop: 24,
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
});

export default App;
