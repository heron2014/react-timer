var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      seconds: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({seconds: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = null;
          break;
      }
    }
  },
  componentWillMount: function () {
    console.log('component will mount');
  },
  componentDidMount: function () {
    console.log('component did mount');
  },
  componentWillUnmount: function () {
    console.log('component did unmount');
    clearInterval(this.timer);
    this.timer = null;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      let newSeconds = this.state.seconds - 1;
      this.setState({
        seconds: newSeconds >= 0 ? newSeconds : 0
      });

      if (newSeconds === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      seconds: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function () {
    let {seconds, countdownStatus} = this.state;
    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
      } else {
        return  <CountdownForm onSetCountdown={this.handleSetCountdown} />;
      }
    }
    return (
      <div>
        <Clock totalSeconds={seconds} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
