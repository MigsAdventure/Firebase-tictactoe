import React, { Component } from 'react';
import { connect } from  'react-redux';
import Board from './Board';
import { addIcon } from '../actions/FirebaseActions';

@connect(state => ({
  BoardState: state.board,
}), dispatch => ({
  addNewIcon(icon) {
    dispatch(addIcon(icon));
  }
}))
export default class Layout extends Component {
  render() {
    const { icons, addNewIcon } = this.props;
    return (
      <div className='container'>
        <h1 className='text-center'>Tic Tac Toe</h1>
        <Board />
        {/* <Players icons={icons} /> */}
      </div>
    )
  }
}
