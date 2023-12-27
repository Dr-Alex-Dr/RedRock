import { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from 'react-native-paper';

function updateKey(index: number, newItem: number, keys: any, setKeys: any) {
    let copyKeys = [...keys]
    copyKeys[index] = newItem
    setKeys(copyKeys)
}

export function KeyCard({generalIndex, item, keys, setKeys}: any) {
    const listPoints = [0, 1, 2, 3, 4]
    const dictionaryPoints = ['А', 'Б', 'В', 'Г', 'Д']

   return (
    <View style={styles.pointContainer}>
        <Text>{generalIndex + 1}</Text>
        {
            listPoints.map((point: any, index: any) => (
                <TouchableOpacity 
                    key={index} 
                    style={{...styles.point, backgroundColor: point == item ? '#870D1A' : '#B6B7B8'}} 
                    onPress={() => {updateKey(generalIndex, point, keys, setKeys)}}
                    activeOpacity={0.8}>
                    <Text style={styles.pointText}>{dictionaryPoints[point]}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
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
      width: 50,
      height: 50,
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    pointText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Roboto-Medium'
    },
    pointContainer: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});