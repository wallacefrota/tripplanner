import React, { Component  } from 'react';
import {View, FlatList, TouchableOpacity, Image, StatusBar} from 'react-native';
import MapView from 'react-native-maps'
import Trip from './Trip'

export default class TripsScreen extends Component {
   static navigationOptions = {
       headerShown: false
   }
   renderItem = item => {
       return <Trip onPress={() => this.props.navigation.navigate('TripScreen')} title={item.item.name} price={item.item.price}/ >
   }
   render() {
       const trips = [
           {id: '1', name: 'Viagem Caribe', price: 'R$ 6000'},
           {id: '2', name: 'Portugal', price: 'R$ 3500'},
           {id: '3', name: 'Viagem Barcelona', price: 'R$ 4000'},
           {id: '4', name: 'Ilhas Maldivas', price: 'R$ 5600'}
       ]
       return (
            <View style={{
                flex: 1, 
                justifyContent: 'space-between', 
                alignItems: 'stretch'
            }}>
              <StatusBar backgroundColor="#F7574C" barStyle="light-content" />
                <View style={{flex: 1}}>
                    <MapView style={{flex: 1}}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                        }}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddTripScreen')} style={{position: 'absolute', bottom: 0, right: 6, padding: 10}}>
                            <Image source={require('../../../assets/more.png')}/>
                    </TouchableOpacity>
                </View> 
                <View>
                    <FlatList 
                            data={trips}
                            renderItem={this.renderItem}
                            horizontal
                            pagingEnabled
                    />
                </View>
            </View>
       );
   }
}