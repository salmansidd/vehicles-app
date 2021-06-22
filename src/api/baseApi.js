import axios from 'axios';
import {
  fetchVehiclesSuccess,
  fetchVehiclesError,
  isLoading,
  fetchUsersSuccess,
  fetchUsersError
} from 'redux/actions';

import {BASE_URL} from 'constants.js';

export const fetchVehicles = () => {
	let url = `${BASE_URL}/api/v1/vehicles`
	let request = axios.get(url);
	return dispatch => {
    dispatch(isLoading(true));
    request.then(resp => {
      dispatch(fetchVehiclesSuccess(resp.data));
      dispatch(isLoading(false));
      dispatch(fetchVehiclesError(false));
    }).catch(() => {
      dispatch(fetchVehiclesError(true));
    });
	}
}

export const fetchUsers = (lastName) => {
	let url = lastName ? `${BASE_URL}/api/v1/users?lastName=${lastName}` : `${BASE_URL}/api/v1/users`
	let request = axios.get(url);
	return dispatch => {
    dispatch(isLoading(true));
    request.then(resp => {
      dispatch(fetchUsersSuccess(resp.data));
      dispatch(fetchUsersError(false));
    }).catch(() => {
      dispatch(fetchUsersError(true));
    });
	}
}
