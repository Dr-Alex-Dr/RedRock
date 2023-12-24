import React, {useEffect, useState} from 'react'
import { TextInput } from 'react-native-paper';

export function InputComponent({text, onChangeText, password, value}: any) {
    if (password == undefined) {
        password = false
    }
    if (value == undefined) {
        value = false
    }

    return (
        <TextInput
            mode="outlined"
            secureTextEntry={password}
            underlineColorAndroid='transparent'
            label={text}
            placeholder={text}
            onChangeText={onChangeText}  
            outlineColor='#7F8480'
            activeOutlineColor='#7F8480'
            textColor='#1D1D1D'
            style={{fontSize: 18, fontFamily: 'Roboto', backgroundColor: 'transparent', borderColor: 'red'}}
            multiline={false}
            activeUnderlineColor='white'
            
        />
    )
}