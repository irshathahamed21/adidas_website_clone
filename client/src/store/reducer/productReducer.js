


import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    ALL_PRODUCT_REQUEST,

    
} from "..actionTypes/productActionTypes"


const initialState = {
    products:[]
}

export const productReducer = (state= initialState, action)=> {

    switch(action.type){

        case ALL_PRODUCT_REQUEST: 
        return  {
            loading:true,
            products:[]
        }

        case ALL_PRODUCT_SUCCESS: 
        return  {
            loading:false,
            products:action.payload
        }

        case ALL_PRODUCT_FAIL: 
        return  {
            loading:false,
            error:action.payload
        }
        case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
          default:
            return state;
        

    }

}