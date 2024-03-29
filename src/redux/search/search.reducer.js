import SearchActionTypes from './search.types';

const INITIAL_STATE = {
  searchField: ''
}

const searchReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    case SearchActionTypes.CLEAR_SEARCH_FIELD:
      return {
        ...state,
        searchField: ''
      }
    default:
      {
        return state;
      }
  }
}

export default searchReducer;