import React, { useEffect, useState, useCallback } from 'react'
import { View, Button, ScrollView, TouchableOpacity, Text, StyleSheet  } from 'react-native';
import { KeyCard } from '../componets/KeyCard';


export function TestKeys({route}: any) {
    const [keys, setKeys] = useState(route.params.keys || [])

    return (
        <>
            <View style={styles.container}>
                {
                    keys.length > 0 
                     ? keys.map((item: any, index: any) => (
                         <KeyCard key={index} generalIndex={index} item={item} keys={keys} setKeys={setKeys} />
                       ))
                     : <Text>No keys available</Text>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16, 
        paddingRight: 16, 
        backgroundColor: '#fff', 
        height: '100%'
    },
    point: {
      width: 40,
      height: 40,
      backgroundColor: '#B6B7B8',
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    pointText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Roboto-Medium'
    },
    pointContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});