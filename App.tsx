import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import * as Contacts from 'expo-contacts';
import { Gyroscope } from 'expo-sensors';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/tools/store';
import Main from './src/Main';



export default function App() {
    console.disableYellowBox = true;
    const getContacts = () => {
        Contacts.getContactsAsync();
    };

    return (
        <NavigationContainer>
            <Provider store={store}>
                <Main/>           
            </Provider>            
        </NavigationContainer>        
    );
}