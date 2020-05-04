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


const SearchFeature = (props) => {
    return (
        <View style={styles.css10}>
            <View style={styles.css9}>
                <TextInput placeholder="What do you want to eat" style={styles.css7}></TextInput>
                <Image style={styles.css8} source={props.IconSearch}></Image>
            </View>
            <View style={styles.css11}>
                <Image source={props.IconPromo}></Image>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    css7: {
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 25,
        height: 40,
        fontSize: 13,
        paddingLeft: 45,
        paddingRight: 20,
        backgroundColor: 'white',
        marginRight: 18
    },
    css8: {
        position: 'absolute',
        top: 5,
        left: 12
    },
    css9: {
        position: 'relative',
        flex: 1
    },
    css10: {
        marginHorizontal: 17,
        flexDirection: 'row',
        paddingTop: 15
    },
    css11: {
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default SearchFeature;