"use strict"


//ADD to Cart
export function addToCart(book){
    return{    
        type: "ADD_TO_CART",
        payload: book
    }
}