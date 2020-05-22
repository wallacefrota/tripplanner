import React from 'react';
import {  Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles'
// componente trip imagem tamanho da tela pois é um scrollview horizontal
const Trip = props => {
    const dim = Dimensions.get('window'); // pegando dimensão da tela e repassando ao estilo width
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.wrapperView}>
            <ImageBackground style={[styles.image, {width: dim.width-32 }]} source={require('../../../../assets/Img_Paris.png')} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>{props.price}</Text>
        </TouchableOpacity>
    );
}

export default Trip;