

export default function player(state = {}, action) {
  switch(action.type) {
    case 'RECEIVE_TURN':
      return action.payload;
    case 'RECEIVE_PLAYER':
    return action.payload
    default:
      return state;
  }
}
