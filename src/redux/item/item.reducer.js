import ItemActionTypes from './item.types';
import { rotateItem, flipXItem, flipYItem } from './item.utils';


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
    case ItemActionTypes.CLEAR_CURRENT_ITEM:
      return {
        ...state,
        currentItem: null
      }
    case ItemActionTypes.SET_ITEM_NAME:
      return {
        ...state,
        currentItem: { ...state.currentItem, name: action.payload}
      }
    case ItemActionTypes.ROTATE_ITEM:
      return {
        ...state,
        currentItem: rotateItem(action.payload)
      }
      case ItemActionTypes.FLIP_X_ITEM:
        return {
          ...state,
          currentItem: flipXItem(action.payload)
        }
      case ItemActionTypes.FLIP_Y_ITEM:
        return {
          ...state,
          currentItem: flipYItem(state.currentItem)
        }
    default: {
      return state;
    }
  }
}

export default itemReducer;