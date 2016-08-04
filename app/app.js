var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoAPI = require('TodoAPI');
import Login from 'Login';
var actions = require('actions');
var store = require('configureStore').configure();
import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

//import 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

