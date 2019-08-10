import SearchActionTypes from './search.types';

export const setSearchField = searchField => ({
  type: SearchActionTypes.SET_SEARCH_FIELD,
  payload: searchField
})

export const clearSearchField = searchField => ({
  type: SearchActionTypes.CLEAR_SEARCH_FIELD,
  payload: searchField
})

