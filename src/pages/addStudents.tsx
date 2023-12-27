import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { InputComponent } from '../componets/InputComponent';
import { ButtonComponent } from '../componets/ButtonComponent';
import { addStudent } from '../api/addStudent';


export function AddStudents({route, navigation}: any) {
    const [firtName, setFirtName] = useState('')
    const [lastName, setLastName] = useState('')

    return (
        <View style={{
            paddingLeft: 16, 
            paddingRight: 16, 
            backgroundColor: '#fff', 
            height: '100%'
        }}>
            <InputComponent 
                text='Введите имя ученика'
                onChangeText={(firtName: any) => {setFirtName(firtName)}}
            />
            <InputComponent 
                text='Введите фамилию ученика'
                onChangeText={(lastName: any) => {setLastName(lastName)}}
            />
            <ButtonComponent 
                text='Добавить'
                onPress={() => {
                    addStudent(route.params.groupId, firtName, lastName)
                    .then((res: any) => {
                        console.log(res)
                        navigation.goBack()
                    })
                }}
            />
        </View>
    )
}