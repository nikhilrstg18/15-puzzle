import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import { Button, Modal } from "react-bootstrap";

const layout = _.range(0, 16).map(n => {
  const row = Math.floor(n / 4);
  const col = n % 4;
  return [80 * col, 80 * row];
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: _.shuffle(_.range(0, 16)),
      moves: null,
      time: null,
      timer: null,
      show: false,
    }

    this.reset = this.reset.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  handleClose() {
    this.setState({ 
      show: false
    },()=>{
      this.reset();
    });
  }

  handleShow() {
    this.setState({ 
      show: true
    });
  }


  updatePosition(index) {

    let { positions } = this.state;
    let emptyIndex = positions.indexOf(0);
    let targetIndex = positions.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);
    if (dif === 1 || dif === 4) {
      positions[emptyIndex] = index;
      positions[targetIndex] = 0;
      this.setState({
        positions,
        moves: this.state.moves ? this.state.moves + 1 : 1
      }, () => {
        if (this.state.timer == null) {
          var t = window.setInterval(() => {
            this.setState({
              time: this.state.time == null ? 1 : this.state.time + 1,
            });
          }, 1000);
          this.setState({ timer: t });
        }
      });
      let win = _.every(positions, (value, index, array) => {
        value = value || 16;
        return index === 0 || parseInt(array[index - 1]) <= parseInt(value)
      });
      if (win) {        
        window.clearInterval(this.state.timer);
        this.handleShow();
      }
    }
  }
  reset() {
    window.clearInterval(this.state.timer);
    this.setState({
      time: null,
      moves: null,
      timer:null,
      positions: _.shuffle(_.range(0, 16))
    });
  }
  render() {
    return (
      <div className='row'>
        <div className='col-lg-3 col-md-3 '></div>
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
          <div className="puzzle">
            <h2 className='heading-title'>15 puzzle</h2>
            <div className='upper-action-div'>
              <button onClick={this.reset} className='new-game-btn'>New Game</button>
              <span style={{ flex: '1 1 auto' }}></span>
              <div className='metrics'>
                <div className='text-right'>
                  <div className='upper-action-div-info'>Time</div>
                  <div className='upper-action-div-info xxl'>{this.state.time}<span style={{ fontSize: 'large' }}>s</span></div>
                </div>
                <div className='text-right'>
                  <div className='upper-action-div-info'>Moves</div>
                  <div className='upper-action-div-info xxl'>{this.state.moves}</div>
                </div>
              </div>

            </div>

            <div className="game">

              {this.state.positions.map((i, key) => {
                let cellClass = key ? "cell" : 'empty cell';
                let [x, y] = layout[this.state.positions.indexOf(key)];
                return <div key={key}
                  className={cellClass}
                  onClick={() => this.updatePosition(key)}
                  style={{ transform: `translate3d(${x}px,${y}px,0) scale(1.1)` }}>{key}</div>
              })}
            </div>
            <p className='instruction'>Tap on tile to move tiles in grid to order them from 1 to 15.</p>
            <div className='footer'>
              <hr className='horizon'></hr>
              <p className='created-by'>Crafted by Nikhil Rustagi</p>
              <p className='created-by'>View my portfolio
                <i className='fas fa-at icon'></i>
                <a href='https://nikhilrstg18.github.io/nikhil-rustagi/'>
                  <strong>nikhil-rustagi
                </strong>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-3'></div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Congratulation You Won !</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>Total time taken: {this.state.time}</div>
            <div>Total moves: {this.state.moves}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      

    )
  }
}

export default App;
