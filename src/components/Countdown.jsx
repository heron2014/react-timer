var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      seconds: 0
    };
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      seconds: seconds
    });
  },
  render: function () {
    let {seconds} = this.state;
    return (
      <div>
        <Clock totalSeconds={seconds} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
});

module.exports = Countdown;
