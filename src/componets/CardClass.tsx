import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { BigArrowRight } from './icons/BigArrowRight';
import { View, Text, TouchableOpacity } from 'react-native';

function separateName(name: string) {
    return name.split(' ')[0]
}

export function CardClass({name}: any) {
    return (
        <Card.Title
        title={name}
        titleStyle={{paddingLeft: 40, paddingTop: 10, fontSize: 28, color: '#121212', fontWeight: 'bold'}}
        left={(props) => <View style={{
            borderRadius: 100, 
            backgroundColor: '#870D1A', 
            width: 72, 
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
        }}><Text style={{color: '#FFF', fontSize: 16}}>{separateName(name)}</Text></View>}
        right={() => <BigArrowRight />}
        style={{
            backgroundColor: '#F9F9FC', 
            borderRadius: 12, 
            paddingRight: 15, 
            paddingTop: 42, 
            paddingBottom: 42, 
            marginBottom: 16,
            borderWidth: 1,
            borderColor: '#E3E3E3'
        }}
      />
    )
}