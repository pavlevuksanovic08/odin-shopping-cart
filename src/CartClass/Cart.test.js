import { describe, it, expect, test } from "vitest";
import { Cart } from "./Cart"

describe("Cart Class", () => {
    const testItem = {id: 1, title: "Test", price: 100}
    it("adds new item to cartProducts", () => {
        const cart = new Cart();

        cart.addToCart(testItem, 5);

        expect(cart.cartProducts).toContainEqual({item: testItem, quantity: 5})
    })

    it("addToCart increases quantity", () => {
        const cart = new Cart();

        cart.addToCart(testItem, 5);
        cart.addToCart(testItem, 5);

        expect(cart.cartProducts.length).toEqual(1);
        expect(cart.cartProducts[0].quantity).toEqual(10);
    })

    it("removes item from a cart", () => {
        const cart = new Cart();;

        cart.addToCart(testItem, 5);
        console.log(cart.cartProducts)
        cart.removeFromCart(1);
        console.log(cart.cartProducts)
        expect(cart.cartProducts.length).toEqual(0);
    })

    it("changes quantity to an item", () => {
        const cart = new Cart();

        cart.addToCart(testItem, 5);
        
        cart.changeQuantity(1, 5);

        expect(cart.cartProducts[0].quantity).toEqual(5);
    })
})