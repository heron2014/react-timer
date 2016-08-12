var React = require('react');

var Clock = React.createClass({
  formatSeconds: function(totalSeconds) {

    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${minutes}:${seconds}`;
  },

  render: function () {
    return (
      <div>
        clock
      </div>
    );
  }
});

module.exports = Clock;
