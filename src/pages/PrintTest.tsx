import * as React from 'react';
import { View, Text } from "react-native";
import { ButtonComponent } from "../componets/ButtonComponent";
import { Appbar } from 'react-native-paper';


export function PrintTest({route, navigation}: any) {
    return (
        <View style={{
            paddingLeft: 16, 
            paddingRight: 16, 
            backgroundColor: '#fff', 
            height: '100%'
        }}>
            <Appbar.Header style={{ backgroundColor: '#F9F9FC' }}>
            <Appbar.Content title={route.params.name} style={{ flex: 1, alignItems: 'center'}}/>
        </Appbar.Header>
            {/* <Text>{route.params.keys}</Text> */}
            <ButtonComponent 
                text='Распечатать тест'
            />
            <ButtonComponent 
                text='Вернуться к тестам'
                onPress={() => {
                    navigation.navigate('Тесты для класса', {})
                }}
            />
        </View>
    )
}