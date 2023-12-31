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
        titleStyle={{
            fontFamily: 'Roboto-Medium',
            paddingLeft: 40, 
            paddingTop: 10, 
            fontSize: 26, 
            color: '#121212', 
            }}
        left={() => <View style={{
            borderRadius: 100, 
            backgroundColor: '#870D1A', 
            width: 72, 
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
        }}><Text style={{
            fontFamily: 'Roboto-Regular',
            color: '#FFF', 
            fontSize: 18}}>{separateName(name)}</Text></View>}
        right={() => <BigArrowRight />}
        style={{
            backgroundColor: '#F9F9FC', 
            borderRadius: 12, 
            paddingRight: 15, 
            paddingTop: 42, 
            paddingBottom: 42, 
            marginTop: 16,
            borderWidth: 1,
            borderColor: '#E3E3E3'
        }}
      />
    )
}