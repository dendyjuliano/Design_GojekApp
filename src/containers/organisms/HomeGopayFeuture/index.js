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

import GopayFeature from '../../../components/molecules/GopayFeature';

class HomeGopayFeuture extends Component {
    render() {
        return (
            <View style={styles.css13}>
                <View style={styles.css12}>
                    <Image source={require('../../../assets/icon/gopay.png')}></Image>
                    <Text style={styles.css14}>Rp.50.000</Text>
                </View>
                <View style={styles.css15}>
                    <GopayFeature title='Pay' img={require('../../../assets/icon/pay.png')}></GopayFeature>
                    <GopayFeature title='Nearby' img={require('../../../assets/icon/nearby.png')}></GopayFeature>
                    <GopayFeature title='Top Up' img={require('../../../assets/icon/topup.png')}></GopayFeature>
                    <GopayFeature title='More' img={require('../../../assets/icon/more.png')}></GopayFeature>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    css12: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2c5fb8',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        padding: 14,
    },
    css13: {
        marginHorizontal: 17,
        marginTop: 8
    },
    css14: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    css15: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 12,
        backgroundColor: '#2f65bd',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
})

export default HomeGopayFeuture;