import AsyncStorage from '@react-native-async-storage/async-storage';

export function allStudents(groupId: any) {
    
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('userToken').then((token: any) => {  
            console.log(groupId)    
            fetch(`https://mycum.ru/api/v1/groups/{group_id}/students/?group_id=${groupId}`, {
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