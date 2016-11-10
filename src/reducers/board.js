

export default function board(state = {}, action) {
  switch(action.type) {
    case 'GET_BOARD_STATE':
      return action.payload;
    case 'RECEIVE_RESET':
    return action.payload
    default:
      return state;
  }
}
