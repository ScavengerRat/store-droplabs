import { describe, it, expect } from 'vitest';
import cartReducer, {
    addToCart,
    removeFromCart,
    removeWholeProductFromCart,
    clearCart
} from './cartSlice';


const productA = {
    id: 1,
    title: 'Test Product A',
    price: 100,
    image: 'img-a.jpg'
};

const productB = {
    id: 2,
    title: 'Test Product B',
    price: 50,
    image: 'img-b.jpg'
};

describe('Cart Slice (Shopping Cart Logic)', () => {
    const initialState = {
        itemList: [],
        totalQuantity: 0,
        totalAmount: 0
    };

    it('should handle initial state', () => {
        expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should add a new item to the empty cart', () => {
        const nextState = cartReducer(initialState, addToCart(productA));

        expect(nextState.itemList).toHaveLength(1);
        expect(nextState.itemList[0].id).toBe(productA.id);
        expect(nextState.itemList[0].quantity).toBe(1);
        expect(nextState.itemList[0].totalPrice).toBe(100);

        expect(nextState.totalQuantity).toBe(1);
        expect(nextState.totalAmount).toBe(100);
    });

    it('should increment quantity if item already exists', () => {
        const stateStep1 = cartReducer(initialState, addToCart(productA));
        const nextState = cartReducer(stateStep1, addToCart(productA));

        expect(nextState.itemList).toHaveLength(1);
        expect(nextState.itemList[0].quantity).toBe(2);
        expect(nextState.itemList[0].totalPrice).toBe(200);

        expect(nextState.totalQuantity).toBe(2);
        expect(nextState.totalAmount).toBe(200);
    });

    it('should handle adding different multiple products', () => {
        let state = cartReducer(initialState, addToCart(productA));
        state = cartReducer(state, addToCart(productB));

        expect(state.itemList).toHaveLength(2);
        expect(state.totalQuantity).toBe(2);
        expect(state.totalAmount).toBe(150);
    });

    it('should decrease quantity when removing existing item (qty > 1)', () => {
        const startState = {
            itemList: [{ ...productA, quantity: 2, totalPrice: 200 }],
            totalQuantity: 2,
            totalAmount: 200
        };

        const nextState = cartReducer(startState, removeFromCart(productA.id));

        expect(nextState.itemList).toHaveLength(1);
        expect(nextState.itemList[0].quantity).toBe(1);
        expect(nextState.itemList[0].totalPrice).toBe(100);
        expect(nextState.totalQuantity).toBe(1);
        expect(nextState.totalAmount).toBe(100);
    });

    it('should remove item from list when quantity becomes 0', () => {
        const startState = {
            itemList: [{ ...productA, quantity: 1, totalPrice: 100 }],
            totalQuantity: 1,
            totalAmount: 100
        };

        const nextState = cartReducer(startState, removeFromCart(productA.id));

        expect(nextState.itemList).toHaveLength(0);
        expect(nextState.totalQuantity).toBe(0);
        expect(nextState.totalAmount).toBe(0);
    });

    it('should remove whole product regardless of quantity', () => {
        const startState = {
            itemList: [{ ...productA, quantity: 5, totalPrice: 500 }],
            totalQuantity: 5,
            totalAmount: 500
        };

        const nextState = cartReducer(startState, removeWholeProductFromCart(productA.id));

        expect(nextState.itemList).toHaveLength(0);
        expect(nextState.totalQuantity).toBe(0);
        expect(nextState.totalAmount).toBe(0);
    });

    it('should clear the cart completely', () => {
        const startState = {
            itemList: [
                { ...productA, quantity: 2, totalPrice: 200 },
                { ...productB, quantity: 1, totalPrice: 50 }
            ],
            totalQuantity: 3,
            totalAmount: 250
        };

        const nextState = cartReducer(startState, clearCart());

        expect(nextState.itemList).toEqual([]);
        expect(nextState.totalQuantity).toBe(0);
        expect(nextState.totalAmount).toBe(0);
    });
});