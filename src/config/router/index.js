import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, NewsDetail } from '../../containers/pages';

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false,
                    initialRootName: 'Home'
                }} />
                <Stack.Screen name="NewsDetail" component={NewsDetail} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;