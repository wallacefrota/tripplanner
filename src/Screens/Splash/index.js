import React, { Component } from 'react';
import {View, Text, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import assets from './assets';
import styles from './styles';

export default class SplashScreen extends Component {
    // retirando o espaço branco do header na navegação
    static navigationOptions = {
        headerShown: false
    }
    state = {
        show: false
    }
    countState = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return(
            <View style={styles.background}>
            <StatusBar backgroundColor="#fc9738" barStyle="light-content" />
                <View style={styles.image}>
                    <Image source={assets.globe}/>
                    <Text style={styles.nameApp}>TRIP-PLANNER</Text>
                </View>
                {
                    !this.state.show ? // estado negado = falso
                    <TouchableWithoutFeedback onPress={this.countState}>
                        <View style={styles.viewButton}>
                            <Text style={styles.textButton}>COMEÇAR</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    : 
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('TripsScreen')}>
                        <View style={styles.viewEmptyStateButton}>
                            <Image source={assets.pin} style={styles.pin}/>
                              <Text style={styles.textEmptyStateButton}>Vamos planejar sua primeira viagem?</Text>
                            <Image source={assets.arrow} style={styles.arrow}/>
                        </View>
                    </TouchableWithoutFeedback>
                }
            </View>
        );
    }
}