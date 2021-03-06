﻿import * as React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

//This is an example of a stateless functional component.
//The reason you would want to use a functional component over a class component is:
//1. Easier to read and test.
//2. You end up with less code.
//3. Separating container and presentational components is a best practice. Presentational components don't need to set state.

const Reason = ({ summary }) => (
    <Card>
        <CardBody>
            <CardText>{summary}</CardText>
        </CardBody>
    </Card>
)

export default Reason;