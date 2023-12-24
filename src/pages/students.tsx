import React, { useState, useCallback } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { PlusButton } from '../componets/PlusButton';
import { allStudents } from '../api/allStudents';
import { List } from 'react-native-paper';

function separateName(name: string) {
    return name.split('')[0]
}


export function Students({route, navigation}: any) {
    const [students, setStudents] = useState([])

    useFocusEffect(
        useCallback(() => {
            allStudents(route.params.groupId)
            .then((res: any) => {
                console.log(res)
                setStudents(res)
            })
        }, [])
      );

    return (
        <View style={{backgroundColor: '#fff', height: '100%'}}>
             <PlusButton 
                onPress={() => {navigation.navigate('Добавить ученика', {
                    groupId: route.params.groupId
                })}}
                />
            <ScrollView style={{backgroundColor: '#fff'}}>           
                {
                    students.length > 0 ? (
                        students.map((item: any) => ( 
                           
                            <List.Item
                            style={{marginLeft: 30}}
                            title={`${item.first_name} ${item.last_name}`}
                            titleStyle={{fontSize: 18}}
                            left={props => <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 100,
                                backgroundColor: '#870D1A', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                
                            }}><Text style={{color: '#fff', fontSize: 18}}>{separateName(item.first_name)}</Text></View>}
                          />
                        ))
                    ) : (
                        <Text>Массив groups пуст</Text>
                    )
                }
                
            </ScrollView>
        </View>
        )
}