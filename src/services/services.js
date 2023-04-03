export const getData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then((data ) => {
          const products = data
          resolve(products)
        })
        .catch((err) => 
        { 
          reject(err)
        })
    })
  }