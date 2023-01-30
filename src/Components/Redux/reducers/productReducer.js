import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};
const productReducer = (state = initialState, action) => {
  // find product by id;
  const selectedProduct = state.cart.find(
    (product) => product.id === action.payload.id
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        selectedProduct.quantity += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity >1) {
        selectedProduct.quantity -= 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }
        return {
          ...state,
          cart: state.cart.filter(
            (product) => product.id !== action.payload.id
          ),
        };

    default:
      return state;
  }
};

export default productReducer;
