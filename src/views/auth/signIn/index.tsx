import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableWithoutFeedback } from 'react-native';
import { ButtonComponent } from '../../../components/Buttons';
import { InputComponent } from '../../../components/Input';

import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../../assets/identidadeVisual_dark.png';
import styles from './styles';
import { COLORS } from '../../../themes/colors';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const showPassword = () => {
        setIsVisible(!isVisible);
    }

    const goToForgotPassword = () => {

    }

    const renderIconEyes = () => {
        return isVisible
            ? <Icon name="eye" size={21} />
            : <Icon name="eye-slash" size={21} /> 
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={Logo} style={styles.logo}/>
                <InputComponent
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                    leftElement={<Icon name='user' color='black' size={21} />}
                />
                <InputComponent
                    value={password}
                    onChangeText={(text)=> setPassword(text)}
                    secureTextEntry={isVisible}
                    leftElement={<Icon name='lock' color='black' size={21} />}
                    rightElement={renderIconEyes()}
                    showPassword={showPassword}
                />
                <TouchableWithoutFeedback onPress={goToForgotPassword}>
                    <Text style={styles.linking}>Esqueci minha senha</Text>
                </TouchableWithoutFeedback>
                <ButtonComponent 
                    title='Entrar' 
                    onPress={()=> {}}
                />
                <ButtonComponent 
                    title='Cadastrar' 
                    background={COLORS.secondary}
                    color={COLORS.primary}
                    onPress={()=> {}}
                />
            </View>
        </SafeAreaView>
    )
}

export { SignInScreen };