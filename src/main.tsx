import React, { useState } from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { ButtonComponent } from './components/Buttons';
import { InputComponent } from './components/Input';

const Main = () => {
    const [text, setText] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello Dev 👽
            </Text>
            <InputComponent
                value={text}
                onChangeText={(text)=> setText(text)}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                leftElement
                rightElement
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