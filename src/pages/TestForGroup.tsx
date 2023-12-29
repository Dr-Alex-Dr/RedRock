import React, { useEffect, useState, useCallback } from 'react'
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { PlusButton } from '../componets/PlusButton';
import { useFocusEffect } from '@react-navigation/native';
import { Avatar, Card, IconButton, Text, Title } from 'react-native-paper';
import { allQuizzes } from '../api/allQuizzes';
import { TestCard } from '../componets/TestCard';

export function TestForGroup({navigation}: any) {
    const [tests, setTests] = useState([])

    useFocusEffect(
        useCallback(() => {
            allQuizzes()
            .then((res: any) => {
                setTests(res)
            })
        }, [])
      );

    return (

    <View style={{
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#fff', 
        height: '100%'}}>
         <PlusButton onPress={() => navigation.navigate('Создать тест')} />
        
           
            {
                tests.length > 0 ? (
                <ScrollView >
                    {
                    tests.map((item: any, index) => ( 
                        <TouchableOpacity key={index} onPress={() => {navigation.navigate('Результирующие ключи',  {
                            groupId: item.id,
                            keys: item.content.answers
                        })}}  activeOpacity={0.8}>         
                            <TestCard name={item.title}/>
                        </TouchableOpacity>
                    ))
                }
                </ScrollView>
                ) : (
                    <View>
                        <Image source={require('../assets/peeple.png')}/>
                        <Text style={{textAlign: 'center', paddingTop: 8}} variant="headlineMedium">Вы ещё не{'\n'}добавляли тесты</Text>
                    </View>
                )
            }
            
    </View>
    )
}