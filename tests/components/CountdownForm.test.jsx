var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    //create a spy
    let spy = expect.createSpy();
    //instance of CountdownForm (this is why is in lowercase)
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm  onSetCountdown={spy} />);
    let $el = $(ReactDOM.findDOMNode(countdownForm));
    //manipulate the value passed to countdownForm
    // first example when the seconds are a valid input
    countdownForm.refs.seconds.value = '102';
    //simulate the submit
    TestUtils.Simulate.submit($el.find('form')[0]);
    // https://github.com/mjackson/expect#spy-tohavebeencalledwith
    expect(spy).toHaveBeenCalledWith(102);
  });

  it('should not call the onSetCountdown if invalid seconds entered', () => {
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    let $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = 'notANumber';
    TestUtils.Simulate.submit($el.find('form')[0]);
    // https://github.com/mjackson/expect#spy-tonothavebeencalled
    expect(spy).toNotHaveBeenCalled();
  });

  it('should not call the onSetCountdown if seconds is not entered', () => {
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    let $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    // https://github.com/mjackson/expect#spy-tonothavebeencalled
    expect(spy).toNotHaveBeenCalled();
  });
});
