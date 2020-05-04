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


const GoNews = (props) => {
    return (
        <View style={styles.css24}>
            <View style={styles.css30}>
                <Image source={props.img} style={styles.css25}></Image>
                <View style={styles.css31}></View>
                <View style={styles.css29}>
                    <Image source={props.logo} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }}></Image>
                </View>
            </View>
            <View style={styles.css26}>
                <Text style={styles.css27}>{props.title}</Text>
                <Text style={styles.css28}>{props.text}</Text>
                <TouchableOpacity style={styles.css32} onPress={props.onPress}>
                    <Text style={styles.css33}>{props.textBtn}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    css24: {
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    css25: {
        height: 170,
        width: '100%',
        borderRadius: 6
    },
    css26: {
        paddingTop: 16,
        paddingBottom: 20,
        borderBottomColor: '#e8e9ed',
        borderBottomWidth: 1
    },
    css27: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#1c1c1c'
    },
    css28: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#7a7a7a'
    },
    css29: {
        height: 15,
        width: 60,
        position: 'absolute',
        top: 16,
        left: 16
    },
    css30: {
        position: 'relative'
    },
    css31: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        borderRadius: 6,
        opacity: 0.2
    },
    css32: {
        backgroundColor: '#27ae60',
        paddingHorizontal: 12,
        paddingVertical: 11,
        alignSelf: 'flex-end',
        borderRadius: 4,
        marginTop: 11
    },
    css33: {
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center'
    },
    css39: {
        marginTop: 16,
        borderBottomColor: '#e8e9ed',
        borderBottomWidth: 1
    },
    css40: {
        padding: 16,
        paddingBottom: 0
    }
});

export default GoNews;