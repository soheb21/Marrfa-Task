import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    productsData: {},
    categories: [],
    searchData: [],
    cart: [],
    error: null
}

const productSlice = createSlice({
    initialState,
    name: "products",
    reducers: {
        productRequest(state, action) {
            state.loading = true;
            state.productsData = {};
            state.error = null;
        },
        productSuccess(state, action) {
            state.loading = false;
            state.productsData = action.payload;
            state.error = null;
        },
        productReject(state, action) {
            state.loading = false;
            state.productsData = state.productsData;
            state.error = action.payload;
        },
        searchRequest(state, action) {
            state.loading = true;
            state.searchData = {};
            state.error = null;
        },
        searchSuccess(state, action) {
            state.loading = false;
            state.searchData = action.payload;
            state.error = null;
        },
        searchReject(state, action) {
            state.loading = false;
            state.searchData = state.searchData;
            state.error = action.payload;
        },
        categoriesRequest(state, action) {
            state.loading = true;
            state.categories = [];
            state.error = null;
        },
        categoriesSuccess(state, action) {
            state.loading = false;
            state.categories = action.payload;
            state.error = null;
        },
        categoriesReject(state, action) {
            state.loading = false;
            state.categories = state.categories;
            state.error = action.payload;
        },
        addToCart(state, action) {
            state.cart.push(action.payload);
        },
        removeFromCart(state, action) {

            let newCart = state.cart.filter((i) => i.id !== action.payload)
            state.cart = newCart;
        },
        clearAllProductErrors(state, action) {
            state.error = null;
            state.productsData = state.productsData;
            state.categories = state.categories;
            state.searchData = state.searchData;
            state.cart = state.cart;
            state.loading = false;
        }
    }
})
export const clearAllProductsErrorFun = () => (dispatch) => {
    dispatch(productSlice.actions.clearAllProductErrors());
}
export const getProducts = (page, category, sort) => async (dispatch) => {
    try {
        dispatch(productSlice.actions.productRequest());
        const { title, order } = sort;
        const { data } = await axios.get(`${category ? ` https://dummyjson.com/products/category/${category}?sortBy=${title}&order=${order}&limit=10&skip=${page}` : `https://dummyjson.com/products?sortBy=${title}&order=${order}&limit=10&skip=${page}`}`);
        dispatch(productSlice.actions.productSuccess(data));
        dispatch(productSlice.actions.clearAllProductErrors());
    } catch (e) {
        if (e.response.data.message) {
            dispatch(productSlice.actions.productReject(e.response.data.message))

        } else {
            dispatch(productSlice.actions.productReject(e.message))
        }
    }
}
export const getSearch = (search) => async (dispatch) => {
    try {
        dispatch(productSlice.actions.productRequest());
        const { data } = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
        dispatch(productSlice.actions.productSuccess(data));
        dispatch(productSlice.actions.clearAllProductErrors());
    }
    catch (e) {
        if (e.response.data.message) {
            dispatch(productSlice.actions.productReject(e.response.data.message))

        } else {
            dispatch(productSlice.actions.productReject(e.message))
        }
    }
}
export const getCategory = () => async (dispatch) => {
    try {
        dispatch(productSlice.actions.categoriesRequest());
        const { data } = await axios.get('https://dummyjson.com/products/categories');
        dispatch(productSlice.actions.categoriesSuccess(data));
        dispatch(productSlice.actions.clearAllProductErrors());
    } catch (e) {
        if (e.response.data.message) {
            dispatch(productSlice.actions.categoriesReject(e.response.data.message))

        } else {
            dispatch(productSlice.actions.categoriesReject(e.message))
        }
    }
}
export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;