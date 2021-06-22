import {
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_ERROR,
  IS_LOADING
} from 'redux/actions/types';
  
export const vehicles = (state = {}, action) => {
  switch (action.type) {
    case FETCH_VEHICLES_SUCCESS:
      return Object.assign({}, state, action.vehicles);
    default:
      return state;
  }
}

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export const vehiclesHaveError = (state = false, action) => {
  switch (action.type) {
    case FETCH_VEHICLES_ERROR:
      return action.hasError;
    default:
      return state;
  }
}
