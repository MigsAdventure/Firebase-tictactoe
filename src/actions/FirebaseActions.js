import { database } from '../firebaseApp';

const playerTurnRef = database.ref('playerTurn');
const boardRef = database.ref('board');


function getPlayer(currPlayer) {
  return {
    type: 'GET_PLAYER_TURN',
    payload: currPlayer,
  };
}

function getBoard(board) {
  return {
    type: 'GET_BOARD_STATE',
    payload: board,
  };
}
export function startListeningToBoard() {
  return (dispatch) => {
    boardRef.off();
    boardRef.on('value', (snap) => {
      const board = snap.val();
      dispatch(getBoard(board));
    });
  };
}

export function startListeningToPlayer() {
  return (dispatch) => {
    playerTurnRef.off();
    playerTurnRef.on('value', (snap) => {
      const currPlayer = snap.val();
      dispatch(getPlayer(currPlayer));
    });
  };
}

export function newGame() {
  let resetBoard = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  };
  boardRef.set(resetBoard);
  return {
    type: 'RESET_BOARD',
    payload: resetBoard,
  };
}

export function playerAction(color, key) {
  boardRef.child(key).set(color);
  if (color === 'red') {
    playerTurnRef.set('blue');
  } else {
    playerTurnRef.set('red');
  }
  return {
    type: 'PREVENT_ERROR',
  };
}
