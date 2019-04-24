import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss";
import "./assets/demo/demo.css";
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory} from 'history';
import indexRoutes from './routes/index.jsx'

const history = createBrowserHistory();

ReactDOM.render(
//<App />, document.getElementById('root')
<Router history={history}>
<Switch>
{indexRoutes.map((prop, key) => {
    return <Route path={prop.path} key={key} component={prop.component} />
})}
</Switch>
</Router>,
document.getElementById("root")
);
serviceWorker.unregister();
