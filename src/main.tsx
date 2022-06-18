import React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { ButtonComponent } from './components/Buttons';

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello Dev 👽
            </Text>
            <ButtonComponent
                title='Entrar'
                onPress={()=> {} }
            />
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex:1,

        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
    },
    text: {
        fontWeight:'bold'
    }
})