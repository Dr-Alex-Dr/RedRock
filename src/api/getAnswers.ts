
export function getAnswers(urlImage: any) {
    console.log('url ' + urlImage)
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', {
        uri: urlImage,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });
  
      fetch('https://scan.cute-ai.ru/api/v0/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then((res: any) => {
            console.log(res.json())
            return res.json()
        })
        .then((res: any) => {
            console.log('result ' + res)
            return res
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  