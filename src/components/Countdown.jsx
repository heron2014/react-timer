var React = require('react');
var Clock = require('Clock');

var Countdown = (props) => {
  return (
    <div>
      <Clock totalSeconds={130} />
    </div>
  );
}

module.exports = Countdown;
