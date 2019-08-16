import { createSelector } from 'reselect';

// input selector
const selectItem = state => state.item;

// output selector
export const selectCurrentItem = createSelector(
  [selectItem],
  item => item.currentItem
);

export const selectCurrentItemTransform = createSelector(
  [selectCurrentItem],
  currentItem => currentItem.transform
);