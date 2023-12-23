import React, {useEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native';
import { HelperText, TextInput, Button, Text } from 'react-native-paper';
import { submitRegistration } from '../api/submitRegistration';

import { InputComponent } from '../componets/InputComponent';
import { ButtonComponent } from '../componets/ButtonComponent';


export function Registration({navigation}: any) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [answer, setAnswer] = useState('');
    const [typeAnswer, setTypeAnswer] = useState('');

    return (
        <View>
            <Text 
                variant="headlineMedium"
                style={{fontWeight: '500'}}>
                Создать новый аккаунт
            </Text>

            <InputComponent 
                text='Введите имя пользователя'
                onChangeText={(username: any) => setUsername(username)}
            />
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
                text="Зарегистрироваться"
                onPress={() => {
                    submitRegistration(username, email, password)
                    .then((res: any) => {
                        if (res.status == 201) {
                            setTypeAnswer('success')
                            navigation.navigate('Login', {
                                email,
                                password
                            })
                        } else {
                            setTypeAnswer('error')
                        }
                        return res.json()
                    })
                    .then((msg: any) => {
                        setAnswer(msg.message)
                    })
                    .catch((err: any) => {
                        console.log('err ' + err)
                    })
                }}
            />

                    
            <HelperText type={typeAnswer == 'error' ? 'error' : 'info'} visible={true}>
                {answer}
            </HelperText>

            <Text 
                variant="labelLarge"
                style={{fontWeight: '400'}}
            >Есть учётная запись?</Text>
            <Button 
                mode="text" 
                onPress={() => navigation.navigate('Login')}
                textColor='#780000'
                labelStyle={{fontSize: 16}}
                >
                Войти
            </Button>
        </View>
    )
}