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

import NavbarItems from '../../../components/molecules/NavbarItems';

class Navbar extends Component {
    render() {
        return (
            <View style={styles.css2}>
                <NavbarItems img={require('../../../assets/icon/home-active.png')} text='Home' active></NavbarItems>
                <NavbarItems img={require('../../../assets/icon/order.png')} text='Order'></NavbarItems>
                <NavbarItems img={require('../../../assets/icon/help.png')} text='Help'></NavbarItems>
                <NavbarItems img={require('../../../assets/icon/inbox.png')} text='Inbox'></NavbarItems>
                <NavbarItems img={require('../../../assets/icon/account.png')} text='Account'></NavbarItems>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    css2: {
        height: 54,
        flexDirection: 'row'
    },
})

export default Navbar;