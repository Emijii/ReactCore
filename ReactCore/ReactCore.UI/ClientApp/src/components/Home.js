import React, { Component, Fragment } from 'react';
import CarouselDisplay from './CarouselDisplay';
import Button from '@material-ui/core/Button';

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <CarouselDisplay />
                <Button variant="contained" color="primary">Hi Material UI!</Button>
            </Fragment>
        );
    }
}