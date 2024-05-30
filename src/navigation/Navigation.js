import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../auth/Splash';
import Loginscreen from '../auth/Loginscreen';
import ForgetScreen from '../auth/ForgetScreen';
import Sginupscreen from '../auth/Sginupscreen';
import Homescreen from '../auth/Homescreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Loginscreen" component={Loginscreen} />
                <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
                <Stack.Screen name="Sginupscreen" component={Sginupscreen} />
                <Stack.Screen name="Homescreen" component={Homescreen} />


            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default Navigation;
