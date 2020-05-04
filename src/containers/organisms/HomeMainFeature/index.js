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

import MainFeature from '../../../components/molecules/MainFeature';

class HomeMainFeature extends Component {
    render() {
        return (
            <View style={styles.css19}>
                <View style={styles.css21}>
                    <MainFeature title='go-ride' img={require('../../../assets/icon/go-ride.png')}></MainFeature>
                    <MainFeature title='go-car' img={require('../../../assets/icon/go-car.png')}></MainFeature>
                    <MainFeature title='go-bluebird' img={require('../../../assets/icon/go-bluebird.png')}></MainFeature>
                    <MainFeature title='go-send' img={require('../../../assets/icon/go-send.png')}></MainFeature>
                    <MainFeature title='go-deals' img={require('../../../assets/icon/go-deals.png')}></MainFeature>
                    <MainFeature title='go-pulsa' img={require('../../../assets/icon/go-pulsa.png')}></MainFeature>
                    <MainFeature title='go-food' img={require('../../../assets/icon/go-food.png')}></MainFeature>
                    <MainFeature title='go-more' img={require('../../../assets/icon/go-more.png')}></MainFeature>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    css19: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 18
    },
    css21: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 18,
        flexWrap: 'wrap'
    },
})

export default HomeMainFeature;