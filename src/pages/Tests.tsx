import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { PlusButton } from '../componets/PlusButton';
import { useFocusEffect } from '@react-navigation/native';
import { allGroup } from '../api/allGroup';
import { CardClass } from '../componets/CardClass';

export function Tests({navigation}: any) {
    const [groups, setGroups] = useState([])

    useFocusEffect(
        useCallback(() => {
            allGroup()
            .then((res: any) => {
                console.log(res)
                setGroups(res)
            })
        }, [])
      );

    return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
         <PlusButton 
            onPress={() => navigation.navigate('Создать класс')}
            />
        <ScrollView >
           
            {
                groups.length > 0 ? (
                    groups.map((item: any) => ( 
                        <TouchableOpacity onPress={() => {navigation.navigate('Тесты',  {
                            groupId: item.id
                        })}}  activeOpacity={0.8}>         
                            <CardClass name={item.name}/>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>Массив groups пуст</Text>
                )
            }
            
        </ScrollView>
    </View>
    )
}