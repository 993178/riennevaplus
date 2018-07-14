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
module.exports = {ShoppingCart}