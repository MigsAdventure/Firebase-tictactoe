

export default function currPlayer(state = '', action) {
  switch(action.type) {
    case 'GET_PLAYER_TURN':
    console.log('action.payload:', action.payload);
      return action.payload;
    default:
      return state;
  }
}
