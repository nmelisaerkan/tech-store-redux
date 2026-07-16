import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/Product";

interface FavoritesState {
    items: Product[];
}

const initialState: FavoritesState = {
    items: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Product>) => {
            const exists = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (!exists) {
                state.items.push(action.payload);
            }
        },

        removeFavorite: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        clearFavorites(state) {
            state.items = [];
        }
    },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;