import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import AddGroupComponent from './component/Add-Group/AddGroup.js';

import { Provider } from 'react-redux';
import Store from './redux/store';

const store = Store();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact  path="/" component={App} />
                <Route path="/home" component={App} />
                <Route path="/addGroup" component={AddGroupComponent} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
