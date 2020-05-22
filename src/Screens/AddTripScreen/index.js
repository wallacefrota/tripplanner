// importando libs
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, StatusBar} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles'
// class (tela)
class AddTripScreen extends Component {
    static navigationOptions = {
        headerShown: false
    }
    state = {
        position: {
            latitude: 37.78825,
            longitude: -122.4324
        },
        viagemName: "",
        pointName: "",
        description: "",
        price: 0
    }
    render() {
        return (
            <View style={styles.mapHeader}>
            <StatusBar backgroundColor="#F7574C" barStyle="light-content" />
                <View style={{height: 192}}>
                    <MapView style={{flex: 1}}
                            initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121
                        }}>
                        <Marker 
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                        onDragEnd={
                            (evt) => this.setState({position: evt.nativeEvent.coordinate})
                        }
                        draggable
                        />
                    </MapView>
                    <View style={styles.backButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}> 
                                <Image source={require('../../../assets/arrow-left-red.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                      <TextInput style={[styles.input, {marginTop: 32}]} placeholder={'Nome da viagem'} onChangeText={txt => this.setState({viagemName: txt})}/>
                      <TextInput style={styles.input} placeholder={'Nome do ponto'} onChangeText={txt => this.setState({pointName: txt})}/>
                      <TextInput style={styles.input} placeholder={'Descrição'} onChangeText={desc => this.setState({description: desc})}/>
                      <TextInput style={styles.input} placeholder={'Preço'} onChangeText={preco => this.setState({price: parseFloat(preco)})} keyboardType="numeric"/>
                      <TouchableOpacity style={styles.btnSave}>
                          <Text style={styles.textBtn}>SALVAR</Text>
                      </TouchableOpacity>
                </ScrollView>
                    <Text>{JSON.stringify(this.state)}</Text>
            </View>
        );
    }
}
export default AddTripScreen;