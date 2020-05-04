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

const ItemsProduct = (props) => {
    return (
        <View style={{ marginRight: 16 }}>
            <View style={{ width: 150, height: 150 }}>
                <Image source={props.img} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }}></Image>
            </View>

            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginVertical: 12 }}>{props.title}</Text>
        </View>
    )
}

export default ItemsProduct;