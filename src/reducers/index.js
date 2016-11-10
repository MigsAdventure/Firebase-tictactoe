import { combineReducers } from 'redux';

import board from './board';
import player from './player';

export default combineReducers({
  board,
  player
});
