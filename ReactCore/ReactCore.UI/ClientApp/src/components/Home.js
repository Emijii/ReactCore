import React, { Component } from 'react';
import { CardDeck } from 'reactstrap';
import Reason from './Reason';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { reasons: [], loading: true };
    }

    componentDidMount() {
        this.populateReasons();
    }

    render() {
        return (
            <CardDeck>
                {
                    this.state.reasons.map(reason => <Reason summary={reason.summary} />)
                }
            </CardDeck>
        );
    }

    async populateReasons() {
        //TODO: Figure out CORS
        //const response = await fetch('http://localhost:5000/reason');

        const response = await fetch('http://localhost:50775/reason');
        const data = await response.json();
        this.setState({ reasons: data, loading: false });
    }
}