import {
    GET_PRODUCTS, 
    GET_PRODUCTS_LIST, 
    SEARCH_PRODUCT, 
    DELETE_PRODUCT, 
    TOGGLE_AV, 
    GET_PRODUCT, 
    CLEAR_PRODUCT, 
    SET_PRINT_MOD,
    SET_PRINT_ITEMS,
    CLEAR_PRINT_ITEMS
} from '../actions/types';

const initialState = {
    products: [],
    productsList: [],
    product: {},
    loading: true,
    printMod: false,
    printItems: []
}

export default function(state = initialState, action) {
    const { payload, type } = action;

    switch(type) {
        case GET_PRODUCTS_LIST:
            return {
                ...state,
                productsList: payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case GET_PRODUCT:
            return {
                ...state, 
                product: payload,
                loading: false
            }
        case CLEAR_PRODUCT:
            return {
                ...state,
                loading: false,
                product: null
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.name.includes(payload))
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== payload)
            }
        case TOGGLE_AV:
            return {
                ...state, 
                products: state.products.map(product => product._id === payload.id ? {...product, available: !product.available}: product)
            }
        case SET_PRINT_MOD:
            return {
                ...state,
                printMod: !state.printMod
            }
        case SET_PRINT_ITEMS:
            return {
                ...state,
                printItems: [...payload]
            }
        case CLEAR_PRINT_ITEMS:
            return {
                ...state,
                printItems: []
            }
        default:
            return state;
    }
}