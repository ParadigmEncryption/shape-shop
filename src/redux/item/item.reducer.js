import ItemActionTypes from './item.types';
import { rotateItem } from './item.utils';

const INITIAL_STATE = {
  currentItem: null
}

const itemReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case ItemActionTypes.SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      }
    case ItemActionTypes.ROTATE_ITEM:
      return {
        ...state,
        currentItem: rotateItem(state.currentItem, 45)
      }
    default: {
      return state;
    }
  }
}

export default itemReducer;