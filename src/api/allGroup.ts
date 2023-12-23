import AsyncStorage from '@react-native-async-storage/async-storage';

export function allGroup() {
    
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('userToken').then((token: any) => {
            
            fetch('https://mycum.ru/api/v1/groups', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            })
            .then(res => {
                resolve(res.json())  
            })
            .catch(err => {
                reject(err)
            })
        })
    })
    
}