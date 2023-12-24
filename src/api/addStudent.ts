import AsyncStorage from '@react-native-async-storage/async-storage';

export function addStudent(groupId: string, first_name: string, last_name: string) {
    
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('userToken').then((token: any) => {
            fetch(`https://mycum.ru/api/v1/groups/{group_id}/students/?group_id=${groupId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({first_name, last_name, father_name: '-'}),
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