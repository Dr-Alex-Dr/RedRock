import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { InputComponent } from '../componets/InputComponent';
import { ButtonComponent } from '../componets/ButtonComponent';

export function CreateTest({navigation}: any) {
    const [name, setName] = useState('');
    const [countKeys, setCountKeys] = useState(0);

    return (
        <View style={{
            paddingLeft: 16, 
            paddingRight: 16, 
            backgroundColor: '#fff', 
            height: '100%'}}>
            <InputComponent 
                text='Введите название теста'
                onChangeText={(name: any) => {setName(name)}}
            />
            <InputComponent 
                text='Введите количество вопросов'
                onChangeText={(countKeys: any) => {setCountKeys(parseInt(countKeys))}}
            />
            <ButtonComponent 
                text='Продолжить'
                onPress={() => {
                    navigation.navigate('Ключи для теста', {
                        name,
                        countKeys 
                    })
                }}
            />
        </View>
    )
}