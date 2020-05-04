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


const GoInternal = (props) => {
    return (
        <View style={styles.css40}>
            <View style={[styles.css29, { top: 0, left: 0, marginLeft: 10 }]}>
                <Image source={props.logo} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }}></Image>
            </View>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', marginTop: 15, marginBottom: 20 }}>{props.title1}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image source={props.img}></Image>
                </View>
                <View style={{ marginLeft: 16, flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4a4a4a' }}>{props.title}</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4a4a4a' }}>{props.text}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.css32}>
                <Text style={styles.css33}>{props.textBtn}</Text>
            </TouchableOpacity>
            <View style={styles.css39}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    css29: {
        height: 15,
        width: 60,
        position: 'absolute',
        top: 16,
        left: 16
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

export default GoInternal;