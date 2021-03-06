﻿import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class Email extends Component {
    sendEmail() {
        const message = "Test Email Message";

        fetch('http://localhost:5000/Email/SendEmail/' + message, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <Card>
                <Card.Header>Send Email</Card.Header>
                <Card.Body>
                    <Button variant="link" onClick={this.sendEmail}>
                        <svg fontSize="2em" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                        </svg>
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}