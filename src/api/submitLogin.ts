interface User {
    email: string,
    password: string
}

export function submitLogin(userData: User) {
    return new Promise((resolve, reject) => {
        fetch('https://mycum.ru/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
        
    })
}