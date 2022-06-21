import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { IInputProps } from './index.d';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const InputComponent:React.FC<IInputProps> = props => {
    const {  
        label,
        showPassword,
        setShowPassword,
        leftElement:LeftComponent, 
        rightElement:RightComponent,
        error 
    } = props;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.container}>
            {LeftComponent && 
                <View style={styles.leftContent}>
                    <Icon name='user' color='black' size={24} />
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
                <TouchableOpacity 
                    style={styles.rightContent}
                    onPress={handleShowPassword}
                >
                   {
                       showPassword
                            ? <Icon name="eye" color="black" size={24}/>
                            : <Icon name="eye-slash" color="black" size={24}/>
                   }
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