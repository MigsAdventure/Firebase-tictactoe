import React, { Component } from 'react';

export default class Board extends Component {
  constructor() {
    super();
    this.cellClicked = this.cellClicked.bind(this);
    this.renderBtns = this.renderBtns.bind(this);
  }


  cellClicked(e) {
    console.log(e.target);
  }

  renderBtns() {
    let arr = [1,2,3,4,5,6,7,8,9];
    return arr.map((num) => {
      return   <div className="cell" key={num} id={num} onClick={this.cellClicked}></div>
    });


  }

  render() {

    return (
      <div>
        {this.renderBtns()}
      </div>
    )
  }
}
