import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { ArrowRight } from './icons/ArrowRight';
import { View, Text, TouchableOpacity } from 'react-native';

function separateName(name: string) {
    return name.split('')[0]
}

export function TestCard({name}: any) {
    return (
        <Card.Title
        title={name}
        titleStyle={{
            fontFamily: 'Roboto-Medium',
            paddingLeft: 10, 
            paddingTop: 10, 
            fontSize: 24, 
            color: '#121212', 
            }}
        left={() => <View style={{
            borderRadius: 100, 
            backgroundColor: '#870D1A', 
            width: 45, 
            height: 45,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
        }}><Text style={{
            fontFamily: 'Roboto-Regular',
            color: '#FFF', 
            fontSize: 18}}>{separateName(name)}</Text></View>}
        right={() => <ArrowRight />}
        style={{
            backgroundColor: '#F9F9FC', 
            borderRadius: 12, 
            paddingRight: 15, 
            paddingTop: 20, 
            paddingBottom: 20, 
            marginTop: 16,
            borderWidth: 1,
            borderColor: '#E3E3E3'
        }}
      />
    )
}