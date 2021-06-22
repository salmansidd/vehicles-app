import { combineReducers } from 'redux';

import { vehicles, vehiclesHaveError, isLoading } from './vehicles';
import { users, usersHaveError } from './users';

const rootReducer = combineReducers({
  vehicles,
  vehiclesHaveError,
  isLoading,
  users,
  usersHaveError
})

export default rootReducer;
