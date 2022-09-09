import React, { Fragment, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ISelectProps } from './types';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/index';

const Select:React.FC<ISelectProps> = props => {
    const { value, onChangeSelect, label, placeholder, options } = props;
    const [modalVisible, setModalVisible] = useState(false);

    const onRemoveItem = () => {
        onChangeSelect({})
    }

    return (
        <Fragment>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.container} onPress={()=> setModalVisible(true)}>
                <Text style={styles.placeholder}>
                    {value ? value : placeholder}
                </Text>
                {
                    value   
                        ? <TouchableOpacity style={styles.btnRemove} onPress={onRemoveItem} >
                            <Ionicons name='ios-close-circle-outline' size={22} color={'#898989'}/>
                          </TouchableOpacity>
                        : <TouchableOpacity style={styles.arrowDown}>
                            <MaterialIcons name='keyboard-arrow-down' size={22} />
                          </TouchableOpacity>
                }
            </TouchableOpacity>

            <Modal 
                visible={modalVisible} 
                animationType="slide" 
                onRequestClose={()=> setModalVisible(false)}
            >
                <SafeAreaView>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.touchGoBack} onPress={()=> setModalVisible(false)}>
                            <MaterialIcons name='keyboard-arrow-left' size={28}/>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>
                            Selecione um item
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.cancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={options ?? []}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                style={styles.option} 
                                onPress={()=> {
                                    onChangeSelect(item)
                                    setModalVisible(false)
                                }}
                            >
                                <Text>{item.lang}</Text>
                                { value === item.lang && <MaterialIcons name="check-circle-outline" size={22} color={'#00CD66'}/>}
                            </TouchableOpacity>
                        )}
                    />
                </SafeAreaView>
            </Modal>
       </Fragment> 
    )
}

export default Select;