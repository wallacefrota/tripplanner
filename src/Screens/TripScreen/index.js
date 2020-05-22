import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native';
import styles from './styles'

class TripScreen extends Component {
    static navigationOptions = {
        headerShown: false
    }
    renderItem = item => {
        return (
            <View style={{flex: 1, flexDirection: 'row', alignContent: 'center',justifyContent: 'space-between', marginBottom: 16}}>
               <View style={{flexDirection: 'column'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18, letterSpacing: 0.5}}>{item.item.name}</Text>
                    <Text style={{fontSize: 12, letterSpacing: 0.3}}>{item.item.description}</Text>
               </View>
                <View style={{paddingRight: 16, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#F7584C', fontSize: 12, textAlign: 'right', fontWeight: 'bold'}}>{item.item.price}</Text>
                </View>
            </View>
        )
    }
    render() {
        const trip = {
            name: 'Europa 2019',
            price: 'R$ 4000',
            places: [
                {id: '1', name: 'Salvador', price: 300, description: 'Chegada', lat: 0, long: 0},
                {id: '2', name: 'Ceará', price: 400, description: 'Hospedagem', lat: 0, long: 0 },
                {id: '3', name: 'Campinas', price: 300, description: 'Chegada', lat: 0, long: 0},
                {id: '4', name: 'Jericoacoara', price: 400, description: 'Hospedagem', lat: 0, long: 0 },
                {id: '5', name: 'Salinas', price: 300, description: 'Chegada', lat: 0, long: 0},
                {id: '6', name: 'Recife', price: 400, description: 'Hospedagem', lat: 0, long: 0 },
                {id: '7', name: 'Pará', price: 300, description: 'Chegada', lat: 0, long: 0},
                {id: '8', name: 'Porto Alegre', price: 400, description: 'Hospedagem', lat: 0, long: 0 },
                {id: '9', name: 'Minas Gerais', price: 300, description: 'Chegada', lat: 0, long: 0},
                {id: '10', name: 'Pernambuco', price: 400, description: 'Hospedagem', lat: 0, long: 0 },
                {id: '11', name: 'Paraná', price: 300, description: 'Chegada', lat: 0, long: 0},
                {id: '12', name: 'Rio do Sul', price: 400, description: 'Hospedagem', lat: 0, long: 0 }
            ]
        }
        return (
            <View style={styles.viewHeader}>
            <StatusBar backgroundColor="#F7574C" barStyle="light-content" />
                <ImageBackground style={{height: 192}} source={require('../../../assets/paisagem-image.png')}>
                  <View style={styles.backButton}>
                       <TouchableOpacity onPress={() => this.props.navigation.goBack()}> 
                             <Image source={require('../../../assets/arrow-left-red.png')}/>
                       </TouchableOpacity>
                  </View>
                    <Text style={styles.textHeader}>Brasil</Text>
                    <Text style={styles.priceHeader}>R$ 5000</Text>
                </ImageBackground>

                <FlatList style={{flex: 1}}
                    contentContainerStyle={{
                        paddingTop: 16,
                        paddingLeft: 16,
                    }}
                    data={trip.places}
                    renderItem={this.renderItem}
                
                />
                <View style={{flexDirection: 'row', height: 52, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{paddingLeft: 76, paddingBottom: 18, paddingTop: 18, paddingRight: 132}}>
                        <TouchableOpacity>
                            <Text style={{fontSize: 16, fontWeight: 'bold', letterSpacing: 0.4}}>MAPA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingRight: 76, paddingBottom: 18, paddingTop: 18}}>
                        <TouchableOpacity>
                            <Text style={{fontSize: 16, fontWeight: 'bold', letterSpacing: 0.4}}>PONTOS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default TripScreen;