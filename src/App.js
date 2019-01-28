import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';

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
    }

    this.reset = this.reset.bind(this);
    this.updatePosition = this.updatePosition.bind(this);

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
        this.setState({
          positions: _.shuffle(_.range(0, 16))
        }, () => {
          window.clearInterval(this.state.timer);
        })
        window.alert(`U Win!!! - Time Taken :${this.state.time} - Total Moves: ${this.state.moves}`);
      }
    }
  }
  reset() {
    this.setState({
      time: null,
      moves: null,
      positions: _.shuffle(_.range(0, 16))
    }, () => {
      window.clearInterval(this.state.timer);
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
            <p className='instruction'>Tap on tile to move tiles in grid to order them from <span style={{ color: 'white' }}>1 to 15.</span></p>
            <div className='footer'>
              <hr className='horizon'></hr>
              <p className='created-by'>Crafted over sleepless weekends by Nikhil Rustagi</p>
              <p className='created-by'>
                <i className='fas fa-feather icon'></i>
                <a href='hhtps://nikhilrstg18.github.io/nikhil-rustagi/'>
                  <strong>nikhil-rustagi
                </strong>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-3'></div>

      </div>

    )
  }
}

export default App;
