import AsyncStorage from '@react-native-async-storage/async-storage';

export function addQuizzes(title: string, description: string, content: any) {  
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('userToken').then((token: any) => {
            fetch(`https://mycum.ru/api/v1/quizzes/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title,
                    description,
                    content: {
                        'answers': content
                    }
                }),
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