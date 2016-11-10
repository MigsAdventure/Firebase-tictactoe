import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playerAction, newGame } from '../actions/FirebaseActions';

@connect(state => ({
  board: state.board,
  currPlayer: state.currPlayer,
}), dispatch => ({
  startNewGame() {
    dispatch(newGame());
  },
  playerAction(color, key) {
    dispatch(playerAction(color, key));
  },
}))

export default class Board extends Component {
  constructor() {
    super();
    this.cellClicked = this.cellClicked.bind(this);
    this.renderBtns = this.renderBtns.bind(this);
    this.reset = this.reset.bind(this);
  }

  cellClicked(e) {
    // color = current player meaning i need to bring it from the reducer
    //this means that I need to dispatch the action here as well?
    console.log('e.target.id:', e.target.id);
    this.props.playerAction(this.props.currPlayer, e.target.id);
  }

  renderBtns() {

    let arr = [1,2,3,4,5,6,7,8,9];
    return arr.map((num) => {
      let color = this.props.board[num];
      return   <div className="cell" key={num} id={num} onClick={this.cellClicked} style={{backgroundColor: color}}></div>
    });
  }

  reset() {
    //action to reset through firebase goes here
    this.props.startNewGame();
  }

  render() {
    let { board, currPlayer, startNewGame, playerAction  } = this.props;
    console.log('board:', board);
    console.log('currPlayer:', currPlayer);
    return (
      <div className='cellContainer'>
        {this.renderBtns()}
        <button className='btn btn-danger' onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
