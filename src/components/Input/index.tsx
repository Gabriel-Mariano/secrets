import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { IInputProps } from './index.d';

import styles from './styles';

const InputComponent:React.FC<IInputProps> = props => {
    const {  
        label,
        leftElement:LeftComponent, 
        rightElement:RightComponent,
        error 
    } = props;


    return (
        <>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.container}>
            {LeftComponent && 
                <View style={styles.leftContent}>
                    <Text></Text>
                </View>
            }
            <TextInput 
                style={[
                    styles.input,
                    {
                        width: LeftComponent && RightComponent
                            ? '70%'
                            : LeftComponent || RightComponent
                            ? '85%'
                            : '100%'
                    }
                ]}
            />
            {RightComponent && 
                <TouchableOpacity style={styles.rightContent}>
                    <Text></Text>
                </TouchableOpacity>
            }
        </View>
        <Text style={styles.errorMessage}>
            {error ? error : null }
        </Text>
        </>
    )
}

export { InputComponent };