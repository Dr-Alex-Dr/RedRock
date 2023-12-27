import React, { useEffect, useState, useCallback } from 'react'
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { PlusButton } from '../componets/PlusButton';
import { useFocusEffect } from '@react-navigation/native';
import { allGroup } from '../api/allGroup';
import { CardClass } from '../componets/CardClass';
import { Text } from 'react-native-paper';

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
    <View style={{
        paddingLeft: 16, 
        paddingRight: 16, 
        backgroundColor: '#fff', 
        height: '100%'}}>          
            {
                groups.length > 0 ? (
                <ScrollView >  
                    {
                    groups.map((item: any) => ( 
                        <TouchableOpacity key={item.id} onPress={() => {navigation.navigate('Тесты',  {
                            groupId: item.id
                        })}}  activeOpacity={0.8}>         
                            <CardClass name={item.name}/>
                        </TouchableOpacity>
                    ))
                }
                </ScrollView>
                ) : (
                    <View>
                        <Image source={require('../assets/peeple.png')}/>
                        <Text style={{textAlign: 'center', paddingTop: 8}} variant="headlineMedium">Вы ещё не{'\n'}добавляли классы</Text>
                    </View>
                )
            }
            
        
    </View>
    )
}

