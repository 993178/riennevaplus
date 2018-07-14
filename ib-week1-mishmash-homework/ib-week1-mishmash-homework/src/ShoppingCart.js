class ShoppingCart {
    constructor(items) {
        this.items = []
    }
    getItems() {
        return this.items
    }
    addItem(itemName,quantity,price) {
        this.items.push({
            name: itemName,
            quantityItem: quantity,
            pricePerUnit: price
        })
        return this.items
    }
    clear() {
        this.items = []
        return this.items
    }
    clone() {
        //aaargh;
    }
}

const cart = new ShoppingCart()

//call:
cart.addItem('brood', 1, 1.95)
cart.addItem('pizzabodem',4,7.99)

cart.getItems()

//cart.clear();

console.log(cart.items)
const newCart = cart.clone();
console.log(newCart.items)
newCart.clear()
console.log(newCart.items)

console.log(cart.items)





module.exports = {ShoppingCart}

// }

// 1.  Calling `cart.clone()` should return a _new_ ShoppingCart object 
//that contains all the same items. However, the items array and all the 
//items inside should be **copied** so that any changes to one of the 
//carts does not affect the other.  
//(a => ({...a}))

