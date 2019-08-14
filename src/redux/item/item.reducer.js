import ItemActionTypes from './item.types';

const INITIAL_STATE = {
  hidden: true,
  currentItem: null
}

const itemReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case ItemActionTypes.SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      }
    default: {
      return state;
    }
  }
}

export default itemReducer;