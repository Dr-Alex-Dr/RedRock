import React, { useEffect, useState, useCallback } from 'react'
import { View, Button, ScrollView, TouchableOpacity, Text, StyleSheet  } from 'react-native';
import { KeyCard } from '../componets/KeyCard';
import { ButtonComponent } from '../componets/ButtonComponent';
import { addQuizzes } from '../api/addQuizzes';


export function KeysTest({route, navigation}: any) {
    const [keys, setKeys] = useState(Array(route.params.countKeys || 0).fill(-1))

    return (
        <>
            <View style={styles.container}>
                {
                    keys.length > 0
                     ? keys.map((item, index) => (
                         <KeyCard key={index} generalIndex={index} item={item} keys={keys} setKeys={setKeys} />
                       ))
                     : <Text>No keys available</Text>
                }
                <ButtonComponent 
                text='Создать'
                onPress={() => {
                    addQuizzes(route.params.name, String(route.params.countKeys), keys).then((res: any) => {
                        console.log(res)
                        navigation.navigate('Распечатать тест', {
                            name: route.params.name,
                            keys 
                        })
                    })     
                }}
            />
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