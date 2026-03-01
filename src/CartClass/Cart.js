
export class Cart {
    constructor() {
        this.cartProducts = [];
    }

    addToCart(item, quantity) {
        const temp = this.findCartItem(item.id)
        if (temp) {
            temp.quantity += quantity;
            return;
        }

        const newItem = {
            item: item,
            quantity: quantity
        }

        this.cartProducts.push(newItem);
    }

    removeFromCart(id) {
        this.cartProducts = this.cartProducts.filter(cartItem => cartItem.item.id !== id);
    }

    changeQuantity(id, quantity) {
        const item = this.findCartItem(id);

        if (quantity !== item.quantity) {
            item.quantity = quantity;
        }
    }

    findCartItem(id) {
        return this.cartProducts.find(cartItem => cartItem.item.id === id);
    }
}
