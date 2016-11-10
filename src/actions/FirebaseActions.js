import { database } from '../firebaseApp';

const boardRef = database.ref('board');

function receiveRESET(reset) {
  return {
    type: 'RECEIVE_RESET',
    payload: reset,
  }
}

function receiveIcon(icon) {
  return {
    type: 'RECEIVE_ICON',
    payload: icon,
  }
}

export function startListeningToPlayer() {
  return dispatch => {
    boardRef.off();
    boardRef.on('value', snap => {
      let currIcon = snap.val();
      dispatch(receiveIcon(currIcon));
    });
  }
}


export function addIcon(icon) {
  boardRef.push(icon);

  return {
    type: 'ADD_ICON',
    payload: icon,
  }
}
