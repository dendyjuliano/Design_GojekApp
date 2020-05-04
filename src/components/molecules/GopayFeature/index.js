import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const GopayFeature = (props) => {
    return (
        < View style={styles.css16} >
            <Image style={styles.css17} source={props.img}></Image>
            <Text style={styles.css18}>{props.title}</Text>
        </ View >
    )
}

const styles = StyleSheet.create({
    css16: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    css17: {

    },
    css18: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 12
    },
});

export default GopayFeature;