interface User {
    username: string,
    email: string,
    password: string
}

export function submitRegistration(username: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
        fetch('https://mycum.ru/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password}),
        })
        .then(res => {
            resolve(res)  
        })
        .catch(err => {
            reject(err)
        })
    })
    
}