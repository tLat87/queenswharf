// savedRestaurantsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedRestaurants: []  // Массив для хранения сохраненных ресторанов
};

const savedRestaurantsSlice = createSlice({
    name: 'savedRestaurants',
    initialState,
    reducers: {
        addRestaurant: (state, action) => {
            // Добавляем новый ресторан в список сохраненных
            state.savedRestaurants.push(action.payload);
        },
        removeRestaurant: (state, action) => {
            // Убираем ресторан из сохраненных по индексу
            state.savedRestaurants = state.savedRestaurants.filter(
                (restaurant, index) => index !== action.payload
            );
        }
    }
});

// Экспортируем действия
export const { addRestaurant, removeRestaurant } = savedRestaurantsSlice.actions;

// Экспортируем редьюсер
export default savedRestaurantsSlice.reducer;
