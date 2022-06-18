import React from 'react';
import { View, Text , StyleSheet } from 'react-native';

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello Dev 👽
            </Text>
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex:1,

        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontWeight:'bold'
    }
})