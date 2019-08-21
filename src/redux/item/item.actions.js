import ItemActionTypes from './item.types';

export const setCurrentItem = item => ({
  type: ItemActionTypes.SET_CURRENT_ITEM,
  payload: item
})

export const setItemName = event => ({
  type: ItemActionTypes.SET_ITEM_NAME,
  payload: event
})

export const rotateItem = item => ({
  type: ItemActionTypes.ROTATE_ITEM,
  payload: item
})

export const flipXItem = item => ({
  type: ItemActionTypes.FLIP_X_ITEM,
  payload: item
})

export const flipYItem = item => ({
  type: ItemActionTypes.FLIP_Y_ITEM,
  payload: item
})