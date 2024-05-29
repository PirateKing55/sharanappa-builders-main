const { createSlice } = require('@reduxjs/toolkit');
import { HYDRATE } from "next-redux-wrapper";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action.payload.products,
                };
            })
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;