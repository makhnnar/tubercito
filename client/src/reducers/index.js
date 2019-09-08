import { combineReducers } from 'redux';
import Travel from './Travel';
import User from './User';
import Vehicles from './Vehicles';
import Address from './Address';
import Telephones from './Telephones';

export default combineReducers({
  Travel,
  User,
  Vehicles,
  Telephones,
  Address
})