import SearchActionTypes from './search.types';

const INITIAL_STATE = {
  searchField: '',
  items: []
}

const searchReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
        // searchField: setSearchField(state.searchField)
      };
    case SearchActionTypes.SEARCH_ITEMS:
      return {
        ...state,
        items: state.items.filter(
          item => item.type.includes(action.payload) 
        )
      };
    default:
      {
        return state;
      }
  }
}

export default searchReducer;