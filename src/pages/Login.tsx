import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { HelperText, TextInput, Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { submitLogin } from '../api/submitLogin';

import { InputComponent } from '../componets/InputComponent';
import { ButtonComponent } from '../componets/ButtonComponent';

const saveTokenToStorage = async (token: any) => {
    try {
      await AsyncStorage.setItem('userToken', token);
      console.log('Token сохранен успешно!');
    } catch (error) {
      console.error('Ошибка при сохранении токена:', error);
    }
  };

export function Login({route, navigation}: any) { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     setEmail(route.params == undefined ? '' : route.params.email)
    //     setPassword(route.params == undefined ? '' : route.params.password)
    // }, [])
    

    const [answer, setAnswer] = useState('');
    const [typeAnswer, setTypeAnswer] = useState('');

    return (
        <View style={{
            paddingLeft: 16, 
            paddingRight: 16, 
            backgroundColor: '#fff', 
            height: '100%'
        }}>
        <Text 
            variant="headlineLarge"
            style={{
                fontFamily: 'Roboto-Medium',
                marginTop: 60
            }}
        >Войдите или зарегистрируйтесь</Text>

        <InputComponent 
            text='Введите адрес эл.почты' 
            onChangeText={(email: any) => setEmail(email)}
        />
        <InputComponent 
            text='Введите пароль' 
            onChangeText={(password: any) => setPassword(password)}
            password={true}
        />

        <ButtonComponent 
            text='Войти'
            onPress={() => {
                submitLogin({email, password})
                .then((res: any) => {
                    if (res.status == 201) {
                        setTypeAnswer('success')
                    } else {
                        setTypeAnswer('error')
                    }
                    return res.json()
                })
                .then((msg: any) => {
                    saveTokenToStorage(msg.access_token)
                    setAnswer(msg.message)
                    route.params.setIsLogin(true)            
                })
                .catch((err: any) => {
                    console.log('err ' + err)
                })
            }}
        />
 
        <HelperText type={typeAnswer == 'error' ? 'error' : 'info'} visible={true}>
            {answer}
        </HelperText>

        <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text 
                variant="labelLarge"
                style={{fontFamily: 'Roboto-Regular', fontSize: 16}}>
                    Нет аккаунта?
            </Text>
            <Button 
                mode="text" 
                onPress={() => navigation.navigate('Registration')}
                textColor='#780000'
                labelStyle={{fontSize: 16}}>
                Зарегистрироваться
            </Button>
        </View> 
        
    </View>
    )
}