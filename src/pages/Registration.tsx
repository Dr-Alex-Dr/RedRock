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
        >Создать{'\n'}новый аккаунт</Text>

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

            <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text 
                    variant="labelLarge"
                    style={{fontFamily: 'Roboto-Regular', fontSize: 16}}>
                        Есть учётная запись?
                </Text>
                <Button 
                    mode="text" 
                    onPress={() => navigation.navigate('Login')}
                    textColor='#780000'
                    labelStyle={{fontSize: 16}}>
                    Войти
                </Button>
            </View> 
        </View>
    )
}