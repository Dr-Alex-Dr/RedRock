import React from 'react'
import { View, StyleSheet } from 'react-native';
import { HelperText, TextInput, Button, Text } from 'react-native-paper';

export function Registration() {
    const [text, setText] = React.useState('');

    return (
        <View>
            <Text 
                variant="headlineMedium"
                style={{fontWeight: '500'}}
            >Создать новый аккаунт</Text>

            <TextInput
                mode="outlined"
                underlineColorAndroid='transparent'
                label="Введите имя пользователя"
                placeholder="Введите имя пользователя" 
                onChangeText={text => setText(text)}  
                outlineColor='#7F8480'
                activeOutlineColor='#7F8480'
                textColor='#1D1D1Ddfdf'
                style={{fontSize: 18, fontFamily: 'Roboto', backgroundColor: 'transparent', borderColor: 'red'}}
                multiline={false}
                activeUnderlineColor='white'
            />
            <TextInput
                mode="outlined"
                underlineColorAndroid='transparent'
                label="Введите адрес эл.почты"
                placeholder="Введите адрес эл.почты" 
                onChangeText={text => setText(text)}  
                outlineColor='#7F8480'
                activeOutlineColor='#7F8480'
                textColor='#1D1D1Ddfdf'
                style={{fontSize: 18, fontFamily: 'Roboto', backgroundColor: 'transparent', borderColor: 'red'}}
                multiline={false}
                activeUnderlineColor='white'
            />
            <TextInput
            mode="outlined"
            underlineColorAndroid='transparent'
            label="Введите пароль"
            placeholder="Введите пароль" 
            onChangeText={text => setText(text)}  
            outlineColor='#7F8480'
            activeOutlineColor='#7F8480'
            textColor='#1D1D1Ddfdf'
            style={{fontSize: 18, fontFamily: 'Roboto', backgroundColor: 'transparent', borderColor: 'red'}}
            multiline={false}
            activeUnderlineColor='white'
        />
              <Button 
                mode="contained" 
                onPress={() => console.log('Зарегистрироваться')}
                textColor='#fff'
                buttonColor='#870D1A'
                style={{borderRadius: 5}}
                labelStyle={{fontSize: 18}}
                >
                Зарегистрироваться
            </Button>
            
            <HelperText type="error" visible={true}>
                Email address is invalid!
            </HelperText>

            <Text 
                variant="labelLarge"
                style={{fontWeight: '400'}}
            >Есть учётная запись?</Text>
            <Text 
                variant="labelLarge"
                style={{fontWeight: '400', color: '#780000'}}
            >Войти</Text>
        </View>
    )
}