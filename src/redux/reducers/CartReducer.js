const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
}

const CartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            const { product, quantity } = payload;
            const check = state.products.find(pr => pr.id === product.id);
            if (check) {
                return state;
            } else {
                const Tprice = state.totalPrice + product.discountPrice * quantity;
                const Tquantities = state.totalQuantity + quantity;
                product.quantity = quantity;
                return {
                    ...state, products: [...state.products, product], totalPrice: Tprice, totalQuantity: Tquantities
                }

            }
        case "INCREMENT":
            const index = state.products.indexOf(state.products.find((item) => item.id == payload));
            state.products[index].quantity += 1;
            return { ...state, totalPrice: state.totalPrice + state.products[index].discountPrice, totalQuantity: state.totalQuantity + 1 }

        case "DECREMENT":
            const i = state.products.indexOf(state.products.find((item) => item.id == payload));
            if (state.products[i].quantity > 1) {
                state.products[i].quantity -= 1;
                return { ...state, totalPrice: state.totalPrice + state.products[i].discountPrice, totalQuantity: state.totalQuantity - 1 }
            }
            else {
                return state
            }
        case "DELETE":
            const newArray = state.products.filter((item) => item.id !== payload);
            const findPro = state.products.find((item) => item.id == payload);
            return {
                ...state, products: newArray,
                totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity,
                totalQuantity: state.totalQuantity - findPro.quantity
            }

        default:
            return state
    }
}

export default CartReducer;