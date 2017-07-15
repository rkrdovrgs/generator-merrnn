import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './src/components/Layout/Layout.dom';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
import HomeScreen from './src/components/HomeScreen/HomeScreen.dom';

ReactDOM.render(
    <BrowserRouter history={history}>
        <Layout>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
            </Switch>
        </Layout>
    </BrowserRouter>,
    document.getElementById("app")
);
