import {
    GET_PRODUCTS,
    DELETE_PRODUCT,
    GET_PRODUCTS_LIST, 
    SEARCH_PRODUCT, 
    TOGGLE_AV, 
    UPDATE_PRODUCT, 
    GET_PRODUCT, 
    CLEAR_PRODUCT, 
    SET_PRINT_MOD,
    SET_PRINT_ITEMS,
    CLEAR_PRINT_ITEMS
} from './types';

import axios from 'axios';
import { addAlert } from './alert';

// Get all products

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get('https://myproductsapp.herokuapp.com//products');

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete product by id

export const deleteProduct = (id) => async dispatch => {
    try {
        await axios.delete(`https://myproductsapp.herokuapp.com//products/delete-product/${id}`);

        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        });

        dispatch(addAlert('Produsul a fost sters', 'success'));
    } catch (err) {
        console.log(err);
    }
}

// Get products for list

export const getProductsForList = () => async dispatch => {
    try {
        const res = await axios.post('https://myproductsapp.herokuapp.com//products/list', {}, {
                headers: {
                    'Content-Type': 'application/json'
                }
        });

        dispatch({
            type: GET_PRODUCTS_LIST,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

// Toggle availability

export const toggleAv = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put(`https://myproductsapp.herokuapp.com//products/${id}`, {}, config);

        dispatch({
            type: TOGGLE_AV,
            payload: { id, available: res.data }
        });
    } catch (err) {
        console.log(err);
    }
}

export const searchProduct = (searchField) => dispatch => {
    dispatch({
        type: SEARCH_PRODUCT,
        payload: searchField
    });

    if(searchField === '') {
        dispatch(getProducts());
    }
}

export const updateProduct = (id, formData) => async dispatch => {
    try {
        const res = await axios.put(`https://myproductsapp.herokuapp.com//products/edit-product/${id}`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const getProduct = (id) => async dispatch => {
    dispatch({
        type: CLEAR_PRODUCT
    });
    try {
        const res = await axios.get(`https://myproductsapp.herokuapp.com//products/${id}`);

        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const setPrintMod = () => dispatch => {
    dispatch({
        type: SET_PRINT_MOD
    });
}

export const setPrintItems = (items) => dispatch => {
    dispatch({
        type: SET_PRINT_ITEMS,
        payload: items
    });
}