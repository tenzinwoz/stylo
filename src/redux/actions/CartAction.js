export const addToCart = (product, quantity) => (dispatch) => {
    console.log("add")
    dispatch({
        type: "ADD_TO_CART",
        payload: { product, quantity }
    })
}

export const incrementProduct = (id) => (dispatch) => {
    dispatch({
        type: "INCREMENT",
        payload: id
    })
}
export const decrementProduct = (id) => (dispatch) => {
    dispatch({
        type: "DECREMENT",
        payload: id
    })
}

export const deleteProductById = (id) => (dispatch) => {
    dispatch({
        type: "DELETE",
        payload: id
    })
}