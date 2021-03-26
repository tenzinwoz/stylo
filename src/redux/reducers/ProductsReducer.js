const inititalState = {
    products: [],
    product: {}
}

const ProductsReducer = (state = inititalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_PRODUCTS":
            return { ...state, products: payload }
        case "GET_PRODUCT_BYID":
            return { ...state, product: payload }
        default:
            return state;
    }
}

export default ProductsReducer;
