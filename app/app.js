var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('clean the room'));
store.dispatch(actions.setSearchText('room'));
store.dispatch(actions.toggleShowCompleted());

//import 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);

