import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import storage from './sync_storage';
import productReducer from './slices/product-slice';
import cartReducer from './slices/cart-slice';
import wishlistReducer from './slices/wishlist-slice';
import compareReducer from './slices/compare-slice';

const combinedReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer
})

const makeStore = ({ isServer }) => {
    if (isServer) {
      //If it's on server side, create a store
        return configureStore({
            reducer: combinedReducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                serializableCheck: false
            }),
            devTools: true,
        });
    } else {
      //If it's on client side, create a store which will persist
        const { persistStore, persistReducer } = require('redux-persist');
    
        const persistConfig = {
            key: 'quater',
            storage, 
        };
    
        const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer
    
        const store = configureStore({
            reducer: persistedReducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                serializableCheck: false
            }),
            devTools: true,
        }); // Creating the store again    
        
        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
    
        return store;
    }
};

export const wrapper = createWrapper(makeStore)