import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { InputComponent } from '../componets/InputComponent';
import { ButtonComponent } from '../componets/ButtonComponent';

export function CreateTest({navigation}: any) {
    const [name, setName] = useState('')

    return (
        <View>
            <InputComponent 
                text='Введите название теста'
                onChangeText={(name: any) => {setName(name)}}
            />
            <InputComponent 
                text='Введите количество вопросов'
                onChangeText={(name: any) => {setName(name)}}
            />
            <ButtonComponent 
                text='Создать'
                onPress={() => {
                    
                }}
            />
        </View>
    )
}