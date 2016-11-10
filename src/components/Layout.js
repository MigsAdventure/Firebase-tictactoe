import React, { Component } from 'react';
import { connect } from  'react-redux';
import Board from './Board';
import { createNewMessage } from '../actions/FirebaseActions';

@connect(state => ({
  BoardState: state.messages,
}), dispatch => ({
  submitNewMessage(message) {
    dispatch(createNewMessage(message));
  }
}))
export default class Layout extends Component {
  render() {
    const { messages, submitNewMessage } = this.props;
    return (
      <div className='container'>
        <h1 className='text-center'>Redux Express</h1>
        <Board />
        {/* <MessageList messages={messages} /> */}
      </div>
    )
  }
}
