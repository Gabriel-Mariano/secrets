import React from 'react';
import { Pressable, Text } from 'react-native';
import { IButtonProps } from './index.d';
import { COLORS } from '../../themes/colors';

import styles from './styles';

const ButtonComponent:React.FC<IButtonProps> = props => {
    const { 
        title, 
        color, 
        background, 
        ...rest 
    } = props;

    return (
        <Pressable style={[
            styles.container,
            {
                backgroundColor:background ? background : COLORS.primary,
            }
        ]}
        {...rest}
        >
            <Text style={[
                styles.title,
                {
                    color:color ? color : COLORS.secondary
                }
            ]}>
                {title}
            </Text>
        </Pressable>
    )
}

export { ButtonComponent };