// importando modulos
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// importando paginas
import SplashScreen from './src/Screens/Splash';
import AddTripScreen from './src/Screens/AddTripScreen';
import TripScreen from './src/Screens/TripScreen';
import TripsScreen from './src/Screens/TripsScreen';
// stack navegação
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen 
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="AddTripScreen"
            component={AddTripScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="TripScreen"
            component={TripScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="TripsScreen"
            component={TripsScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

// exportando
export default App;