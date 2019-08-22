import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  hidden: true
};

const cartReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
    };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state, // pass in hidden value
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
      case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default: {
      return state;
    }
  }
};

export default cartReducer;