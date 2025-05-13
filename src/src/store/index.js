// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// export const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//     },
// });
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { loadCartState, saveCartState } from './localStorageUtils';

const preloadedCartState = loadCartState();

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: preloadedCartState || undefined,
    },
});

store.subscribe(() => {
    saveCartState(store.getState().cart);
});

