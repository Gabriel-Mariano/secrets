import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SignInScreen } from '../views/auth/signIn';
import { HomeScreen } from '../views/authenticated/home';


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="SignIn" component={SignInScreen} />
                <Drawer.Screen name="Home" component={HomeScreen} />
            </Drawer.Navigator>
      </NavigationContainer>
    );
  }

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="SignIn" component={SignInScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { AppRoutes, MyDrawer};