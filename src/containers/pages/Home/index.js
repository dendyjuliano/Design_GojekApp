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

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInternal from '../../../components/molecules/GoInternal';
import GoBanner from '../../../components/molecules/GoBanner';
import AllProduct from '../../../containers/organisms/AllProduct';
import Navbar from '../../../containers/organisms/Navbar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGopayFeuture from '../../../containers/organisms/HomeGopayFeuture';


class Home extends Component {
    render() {
        return (
            <View style={styles.body}>
                <ScrollView style={styles.css1}>
                    {/* Search Bar */}
                    <SearchFeature IconSearch={require('../../../assets/icon/search.png')} IconPromo={require('../../../assets/icon/promo.png')}></SearchFeature>
                    {/* Gopay */}
                    <HomeGopayFeuture></HomeGopayFeuture>
                    {/* Main Future */}
                    <HomeMainFeature></HomeMainFeature>

                    <View style={{ height: 17, backgroundColor: '#f2f2f4', marginTop: 20 }}></View>

                    {/* News Section */}
                    <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} img={require('../../../assets/dummy/sepak-bola.jpg')} logo={require('../../../assets/logo/white.png')} title='go-news' text='Lionel Messi memasukan bola ke gawang sendiri, pada Piala Dunia' textBtn='read'></GoNews>
                    {/* Internal Section */}
                    <GoInternal logo={require('../../../assets/logo/gojek.png')} img={require('../../../assets/dummy/facebook-connect.png')} title1='Complete Your Profile' title='Connect with facebook' text='Login faster without verification code' textBtn='connect'></GoInternal>
                    {/* GoFood banner section */}
                    <GoBanner img={require('../../../assets/dummy/food-banner.jpg')} logo={require('../../../assets/logo/white.png')} title='Free Go-Food Voucher' text='makan gratis di sini' textBtn='Get Voucher'></GoBanner>
                    {/* Nearby Go-Food */}
                    <AllProduct></AllProduct>

                </ScrollView>
                {/* Navbar Bottom */}
                <Navbar></Navbar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    css1: {
        flex: 1,
        backgroundColor: 'white'
    },
    css2: {
        height: 54,
        flexDirection: 'row'
    },

});

export default Home;