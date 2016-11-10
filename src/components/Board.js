import React, { Component } from 'react';

export default class Board extends Component {
  constructor() {
    super();
    this.cellClicked = this.cellClicked.bind(this);
    this.renderBtns = this.renderBtns.bind(this);
  }


  cellClicked(e) {
    // color = current player meaning i need to bring it from the reducer
    //this means that I need to dispatch the action here as well?
    e.target.style.backgroundColor = 'red';
  }

  renderBtns() {
    let arr = [1,2,3,4,5,6,7,8,9];
    return arr.map((num) => {
      return   <div className="cell" key={num} id={num} onClick={this.cellClicked}></div>
    });


  }

  render() {

    return (
      <div className='cellContainer'>
        {this.renderBtns()}
        <button className='btn btn-danger'>Reset</button>
      </div>
    )
  }
}
