import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {Product} from "../types/Product";

interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        addCart(state, action: PayloadAction<Product>) {
            state.items.push(action.payload);
        },

        removeCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        clearCart(state) {
            state.items = [];
        },
    },
});
export const {addCart, removeCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;