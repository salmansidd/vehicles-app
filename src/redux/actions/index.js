import {
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_ERROR,
  IS_LOADING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './types';

export const fetchVehiclesSuccess = (vehicles) => {
  return {
    type: FETCH_VEHICLES_SUCCESS, vehicles
  };
};

export const fetchVehiclesError = (status) => {
  return {
    type: FETCH_VEHICLES_ERROR, hasError: status
  };
};

export const isLoading = (status) => {
  return {
    type: IS_LOADING, isLoading: status
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS, users
  };
};

export const fetchUsersError = (status) => {
  return {
    type: FETCH_USERS_ERROR, hasError: status
  };
};
