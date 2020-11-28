import {
    Text,
    ScrollView,
    SafeAreaView,
    Switch,
    StyleSheet,
    View,
    TextInput,
    Platform,
    Button,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const [value, onChangeText] = React.useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
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

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1, flexDirection: 'column'}}>
                {/*duplication of view style*/}
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
                    <View>
                        <Button
                            onPress={showDatepicker}
                            title="Show date picker!"
                        />
                    </View>
                    <View>
                        <Button
                            onPress={showTimepicker}
                            title="Show time picker!"
                        />
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
                <View style={{flexDirection: 'row', marginTop: 50}}>
                    <TextInput
                        /*duplicate of textInput style*/
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
