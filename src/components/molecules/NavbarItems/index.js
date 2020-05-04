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

const NavbarItems = (props) => {
    return (
        <View style={[styles.css3, {}]}>
            <Image style={styles.css6} source={props.img}></Image>
            <Text style={[styles.css5, { color: props.active ? '#43ab4a' : '#545454' }]}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    css3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    css5: {
        fontSize: 10,
        color: '#545454',
        marginTop: 4
    },
    css6: {
        width: 26,
        height: 26,
    },
});

export default NavbarItems;