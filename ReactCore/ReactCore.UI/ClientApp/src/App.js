import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import About from './components/About';
import { ARHelloWorld } from './components/ARHelloWorld';
import { Cards } from './components/Cards';
import { Email } from './components/Email';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/ARHelloWorld' component={ARHelloWorld} />
                <Route path='/Cards' component={Cards} />
                <Route path='/Email' component={Email} />
            </Layout>
        );
    }
}
