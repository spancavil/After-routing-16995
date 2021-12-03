export const getProducts = () => {

    return new Promise ((acc, rej) => {
        fetch('https://fakestoreapi.com/products')
        .then( res => res.json())
        .then( data => {
            console.log(data);
            acc(data);
        })
        .catch( err => {
            alert("Hubo un error: ", err.message)
            rej(err.message)
        })
    })
}

export const getProduct = (id) => {

    console.log(id);

    return new Promise ((acc, rej) => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then( res => res.json())
        .then( data => {
            console.log(data);
            acc(data);
        })
        .catch( err => {
            alert("Hubo un error: ", err.message)
            rej(err.message)
        })    
    })
}

export const getProductsByCategory = (category) => {

    return new Promise ((acc, rej) => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then( res => res.json())
        .then( data => {
            console.log(data);
            acc(data)
        })
        .catch( err => {
            alert("Hubo un error: ", err.message)
            rej(err.message)
        })
    })
}

