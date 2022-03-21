const addToDB = (id) => {
    // console.log('hello');
    let cart = {}
    let cartDB = localStorage.getItem('cart')
    if (cartDB) {
        cart = JSON.parse(cartDB)
    }

    // Set The Data Value 
    const quantity = cart[id]
    if (quantity) {
        cart[id] = quantity + 1
    } else {
        cart[id] = 1
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeDB = (id) => {
    const cart = localStorage.getItem('cart')
    if (cart) {
        const storedData = JSON.parse(cart)
        if (id in storedData) {
            delete storedData[id]
            localStorage.setItem('cart', JSON.stringify(storedData))
        }
    }
}

export {addToDB, removeDB}