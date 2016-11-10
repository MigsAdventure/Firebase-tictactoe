import { combineReducers } from 'redux';

import board from './board';
import currPlayer from './currPlayer';

export default combineReducers({
  board,
  currPlayer
});
