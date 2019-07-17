import {FETCH_CHAR_START, FETCH_CHAR_SUCCESS,FETCH_CHARACTER_FAIL} "../actions";
const initialState = {
  characters: [],
  err:'',
  isLoading: false,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
