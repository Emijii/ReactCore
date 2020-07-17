import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Cards } from './components/Cards';
import About from './components/About';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/Cards' component={Cards} />
                <Route path='/About' component={About} />
            </Layout>
        );
    }
}
