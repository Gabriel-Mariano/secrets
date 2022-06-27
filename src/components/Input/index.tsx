import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { IInputProps } from './index.d';
import styles from './styles';

const InputComponent:React.FC<IInputProps> = props => {
    const {  
        label,
        showPassword,
        leftElement:LeftComponent, 
        rightElement:RightComponent,
        error,
        ...rest 
    } = props;


    const renderLeftContent = () => {
        return LeftComponent && (
            <View style={styles.leftContent}>
                {LeftComponent}
            </View>
        )
    }

    const renderRightContent = () => {
        return RightComponent && (
            <TouchableOpacity 
                style={styles.rightContent}
                onPress={showPassword}
            >
                {RightComponent}
            </TouchableOpacity>
        )
    }

    return (
        <>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.container}>
            {renderLeftContent()}
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
                {...rest}
            />
            {renderRightContent()}
            {/* {RightComponent && 
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
            } */}
        </View>
        <Text style={styles.errorMessage}>
            {error ? error : null }
        </Text>
        </>
    )
}

export { InputComponent };