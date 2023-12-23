import React from 'react'
import { View, Text, Button } from 'react-native';

export function Groups({navigation}: any) {
    return (
        <View>
            <Text>Groups</Text>
            <Button
                title="Go"
                onPress={() => navigation.navigate('Создать класс')}
            />
        </View>
    )
}