import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';
import { PlusButton } from '../componets/PlusButton';

export function Groups({navigation}: any) {
    const [groups, setGroups] = useState('')

    return (
        <View>
            <PlusButton 
            onPress={() => navigation.navigate('Создать класс')}
            />
            
        </View>
    )
}