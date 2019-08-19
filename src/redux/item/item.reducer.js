import ItemActionTypes from './item.types';
import { rotateItem, flipXItem } from './item.utils';


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
        currentItem: rotateItem(state.currentItem, action.payload)
      }
      case ItemActionTypes.FLIP_X_ITEM:
        return {
          ...state,
          currentItem: flipXItem(state.currentItem, action.payload),
        }
    default: {
      return state;
    }
  }
}

export default itemReducer;