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
import ItemsProduct from '../../../components/molecules/ItemsProduct';


class AllProduct extends Component {
    render() {
        return (
            <View>
                <View style={[styles.css29, { top: 0, left: 0, marginLeft: 16, position: 'relative' }]}>
                    <Image source={require('../../../assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }}></Image>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c' }}>Nearby Restaurant</Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#27ae60' }}>See All</Text>
                </View>

                <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
                    <ItemsProduct img={require('../../../assets/dummy/go-food-kfc.jpg')} title='KFC Aeon Mall'></ItemsProduct>
                    <ItemsProduct img={require('../../../assets/dummy/go-food-gm.jpg')} title='Bakmi GM Aeon Mall'></ItemsProduct>
                    <ItemsProduct img={require('../../../assets/dummy/go-food-orins.jpg')} title='Martabak Orins'></ItemsProduct>
                    <ItemsProduct img={require('../../../assets/dummy/go-food-banka.jpg')} title='Martabak Banka'></ItemsProduct>
                    <ItemsProduct img={require('../../../assets/dummy/go-food-pak-boss.jpg')} title='Ayam'></ItemsProduct>
                    {/* <View style={{ marginRight: 16 }}>
                        <View style={{ width: 150, height: 150 }}>
                            <Image source={require('../../../assets/dummy/go-food-kfc.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }}></Image>
                        </View>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>KFC Aeon Mall</Text>
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <View style={{ width: 150, height: 150 }}>
                            <Image source={require('../../../assets/dummy/go-food-gm.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }}></Image>
                        </View>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>Bakmi GM Aeon Mall</Text>
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <View style={{ width: 150, height: 150 }}>
                            <Image source={require('../../../assets/dummy/go-food-orins.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }}></Image>
                        </View>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>Martabak Orins</Text>
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <View style={{ width: 150, height: 150 }}>
                            <Image source={require('../../../assets/dummy/go-food-banka.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }}></Image>
                        </View>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>Martabak Banka</Text>
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <View style={{ width: 150, height: 150 }}>
                            <Image source={require('../../../assets/dummy/go-food-pak-boss.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }}></Image>
                        </View>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>Ayam</Text>
                    </View> */}
                </ScrollView>

                <View style={[styles.css39, { marginHorizontal: 16 }]}></View>

            </View>
        )
    }
}


const styles = StyleSheet.create({

});

export default AllProduct;