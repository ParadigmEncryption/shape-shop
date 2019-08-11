import { createSelector } from 'reselect';

const selectItem = state => state.item;

export const selectCurrentItem = createSelector(
  [selectItem],
  item => item.currentItem
);