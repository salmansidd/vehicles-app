import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from 'redux/actions/types';
  
export const users = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return Object.assign({}, state, action.users);
    default:
      return state;
  }
}

export const usersHaveError = (state = false, action) => {
  switch (action.type) {
    case FETCH_USERS_ERROR:
      return action.hasError;
    default:
      return state;
  }
}
