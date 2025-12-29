import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ProductInterface} from "@/api/interfaces/product.interface.ts";
import {fixPrice} from "@/lib/utils.ts";

export interface CartProductInterface extends Pick<ProductInterface, "id" | "title" | "image" | "price"> {
    quantity: number;
    totalPrice: number;
}

interface CartState {
    itemList: CartProductInterface[],
    totalQuantity: number,
    totalAmount: number;
}

const initialState: CartState = {
    itemList: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Pick<ProductInterface, "id" | "title" | "price" | "image">>) {
            const newItem = action.payload;
            const existingItem = state.itemList.find(
                (item) => item.id === newItem.id
            );

            state.totalQuantity++;
            state.totalAmount = fixPrice(state.totalAmount + newItem.price);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = fixPrice(existingItem.totalPrice + newItem.price);
            } else {
                state.itemList.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    image: newItem.image,
                    totalPrice: newItem.price,
                    quantity: 1
                });
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            const id = action.payload;
            const existingItem = state.itemList.find(
                (item) => item.id === id
            );

            if (!existingItem) return;

            state.totalQuantity--;
            state.totalAmount = fixPrice(state.totalAmount - existingItem.price);

            if (existingItem.quantity === 1) {
                state.itemList = state.itemList.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = fixPrice(existingItem.totalPrice - existingItem.price);
            }
        },
        removeWholeProductFromCart(state, action: PayloadAction<number>) {
            const id = action.payload;
            const existingItem = state.itemList.find(
                (item) => item.id === id
            );

            if (!existingItem) return;

            state.totalQuantity -= existingItem.quantity;
            state.totalAmount = fixPrice(state.totalAmount - existingItem.totalPrice);
            state.itemList = state.itemList.filter((item) => item.id !== id);
        },
        clearCart(state) {
            state.itemList = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    },
});

export const {addToCart, removeFromCart, clearCart, removeWholeProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;