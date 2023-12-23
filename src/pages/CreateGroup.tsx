import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { InputComponent } from '../componets/InputComponent';
import { ButtonComponent } from '../componets/ButtonComponent';
import { addGroup } from '../api/addGroup';


export function CreateGroup({navigation}: any) {
    const [name, setName] = useState('')

    return (
        <View>
            <InputComponent 
                text='Введите название класса'
                onChangeText={(name: any) => {setName(name)}}
            />
            <ButtonComponent 
                text='Создать'
                onPress={() => {
                    addGroup(name)
                    .then((res: any) => {
                        return res.json()
                    })
                    .then((res: any) => {
                        console.log(res)
                        navigation.goBack()
                    })
                }}
            />
        </View>
    )
}