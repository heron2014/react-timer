var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    // mocha doesnt support asynchround tests , since we use setTimeout we need to tell mocha abpout it, otherwise it will fail
    // to do that we pass 'done' to second argument to it function, when asynchrouns function is finished we call at the end done() to tell mocha this test is done now
    it('should set state to started and countdown', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.seconds).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      //check if the seconds are counting from 10 -1 = 9
      // use setTimeout to wait a bit over 1 second (1001) so the new state should be updated by now
      setTimeout(() => {
        expect(countdown.state.seconds).toBe(9);
        done();
      }, 1001);
    });

    it('should never set state to less than 0 when countdown reaches to 0', () => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);
      // start countdown from 1 second
      countdown.handleSetCountdown(1);

      //check if the countdown is 0 after 3 seconds passed after starting countdown from 1 second
      setTimeout(() => {
        expect(countdown.state.seconds).toBe(0);
      }, 3001);
    });
  });
});
