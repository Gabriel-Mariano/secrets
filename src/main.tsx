import React, { useState } from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { ButtonComponent } from './components/Buttons';
import { InputComponent } from './components/Input';

const Main = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello Dev 👽
            </Text>
            <InputComponent
                value={text}
                onChangeText={(text)=> setText(text)}
                leftElement={()=> <View><Text>teste</Text></View>}
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