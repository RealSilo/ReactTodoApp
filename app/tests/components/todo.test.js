var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
  it('should exist', () =>{
    expect(Todo).toExist();
  });

  // it('should call onToggle with id on click', () => {
  //   var dataId = 199;
  //   var todoData = {
  //     id: dataId,
  //     text: 'write todo test',
  //     completed: true
  //   };
  //   var spy = expect.createSpy();
  //   var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(todo));

  //   TestUtils.Simulate.click($el[0]);

  //   expect(spy).toHaveBeenCalledWith(dataId);
  // });

it('should dispatch UPDATE_TODO action on click', () => {
    var dataId = 199;
    var todoData = {
      id: dataId,
      text: 'write todo test',
      completed: true
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});

