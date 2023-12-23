import AsyncStorage from '@react-native-async-storage/async-storage';

export function addGroup(name: string) {
    
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('userToken').then((token: any) => {
            fetch('https://mycum.ru/api/v1/groups/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({name}),
            })
            .then(res => {
                resolve(res)  
            })
            .catch(err => {
                reject(err)
            })
        })
    })
    
}