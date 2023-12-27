import React, { useState, useCallback } from 'react'
import { View, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { PlusButton } from '../componets/PlusButton';
import { allStudents } from '../api/allStudents';
import { List, Text } from 'react-native-paper';

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
                      
                {
                    students.length > 0 ? (
                    <ScrollView style={{backgroundColor: '#fff'}}> 
{
                        students.map((item: any) => (         
                            <List.Item
                            key={item.id}
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
                    }
                    </ScrollView>
                    ) : (
                        <View>
                        <Image source={require('../assets/peeple.png')}/>
                        <Text style={{textAlign: 'center', paddingTop: 8}} variant="headlineMedium">Вы ещё не{'\n'}добавляли учеников</Text>
                    </View>
                    )
                }
                
        </View>
        )
}