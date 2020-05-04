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


const GoBanner = (props) => {
    return (
        <View style={styles.css34}>
            <View style={styles.css35}>
                <Image source={props.img} style={styles.css25}></Image>
                <View style={styles.css31}></View>
                <View style={styles.css29}>
                    <Image source={props.logo} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }}></Image>
                </View>
                <View style={styles.css36}>
                    <View>
                        <Text style={styles.css37}>{props.title}</Text>
                        <Text style={styles.css38}>{props.text}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.css32}>
                            <Text style={styles.css33}>{props.textBtn}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.css39}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    css25: {
        height: 170,
        width: '100%',
        borderRadius: 6
    },
    css29: {
        height: 15,
        width: 60,
        position: 'absolute',
        top: 16,
        left: 16
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
    css34: {
        padding: 16
    },
    css35: {
        position: 'relative',
    },
    css36: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16
    },
    css37: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 12
    },
    css38: {
        fontSize: 12,
        color: 'white',
        fontWeight: '400'
    },

});

export default GoBanner;