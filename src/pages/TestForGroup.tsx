import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { PlusButton } from '../componets/PlusButton';
import { useFocusEffect } from '@react-navigation/native';
import { Avatar, Card, IconButton } from 'react-native-paper';

export function TestForGroup({navigation}: any) {
    const [tests, setTests] = useState([])

    // useFocusEffect(
    //     useCallback(() => {
    //         allGroup()
    //         .then((res: any) => {
    //             console.log(res)
    //             setGroups(res)
    //         })
    //     }, [])
    //   );

    return (

    <View style={{backgroundColor: '#fff', height: '100%'}}>
         <PlusButton onPress={() => navigation.navigate('Создать тест')} />
        <ScrollView >
           
            {
                tests.length > 0 ? (
                    tests.map((item: any) => ( 
                        <TouchableOpacity onPress={() => {navigation.navigate('Ученики',  {
                            groupId: item.id
                        })}}  activeOpacity={0.8}>         
                            <Card.Title
                                title="Признаки треугольника"
                                subtitle="20 вопросов"
                                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                            />
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