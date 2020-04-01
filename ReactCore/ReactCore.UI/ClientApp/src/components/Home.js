import React, { Component } from 'react';
import { CardDeck } from 'reactstrap';
import Reason from './Reason';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <CardDeck>
                <Reason title="Reason 1" description="Description 1" />
                <Reason title="Reason 2" description="Description 2" />
                <Reason title="Reason 3" description="Description 3" />
            </CardDeck>
        );
    }
}
