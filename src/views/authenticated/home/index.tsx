import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import TouchID from 'react-native-touch-id';
import ReactNativeBiometrics from 'react-native-biometrics';
import styles from './styles';
import Select from '../../../components/Select';

const HomeScreen = () => {
    const [supported, setSupported] = useState(null);
    const [langSelected, setLangSelected] = useState('');

    const languages = [
        {
            id:'1',
            lang:'JavaScript'
        },
        {
            id:'2',
            lang:'Python'
        }
    ]

    useEffect(()=> {
        // TouchID.isSupported()
        // .then(success => {
        //     console.log('sucesso')
        // })
        // .catch((error)=> {
        //     console.log(error)
        // })
        // const biometrics = new ReactNativeBiometrics();
        // biometrics.createKeys()
        // .then((result)=> {
        //     const { publicKey } = result;
        //     console.log(publicKey)
        // })
    },[])

    const handleTouch = async () => {
        TouchID.authenticate('to demo this react-native component')
        .then((success:any) => {
            Alert.alert('Authenticated Successfully');
            console.log(success)
        })
        .catch((error:any) => {
            Alert.alert('Authentication Failed');
        });   
// const rnBiometrics = new ReactNativeBiometrics() 

//    rnBiometrics.biometricKeysExist()
//   .then((resultObject) => {
//       console.log('entrou aqui')
//     const { keysExist } = resultObject

//     if (keysExist) {
//       console.log('Keys exist')
//     } else {
//       console.log('Keys do not exist or were deleted')
//     }
//   }).catch(error => Alert.alert('error',error))
        // const { biometryType } = await biometrics.isSensorAvailable();

        // TouchID.authenticate('test').then((success:any) => {
        //     Alert.alert('sucesso')
        //     console.log(success)
        // }).catch((error:any)=> {
        //     Alert.alert('erro')
        //     console.log(error)
        // })
    }

    return (
        <View style={styles.container}>
            <Select 
                label='Linguagens de programação:'
                placeholder='Selecione uma linguagem ...'
                options={languages}
                value={langSelected}
                onChangeSelect={(item)=> setLangSelected(item.lang)}
            />
        </View>
    )
}

export { HomeScreen };