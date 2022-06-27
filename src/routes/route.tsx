import * as React from 'react';
import { NavigationContainer, StackActionHelpers } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '../views/auth/signIn';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes;