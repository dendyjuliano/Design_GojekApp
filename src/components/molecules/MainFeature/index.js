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

const MainFeature = (props) => {
    return (
        <View style={styles.css22}>
            <View style={styles.css20}>
                <Image source={props.img}></Image>
            </View>
            <Text style={styles.css23}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    css20: {
        width: 58,
        height: 58,
        borderWidth: 1,
        borderColor: '#efefef',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    css22: {
        width: '25%',
        alignItems: 'center',
        marginBottom: 18
    },
    css23: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
        textTransform: 'uppercase'
    },
});

export default MainFeature;