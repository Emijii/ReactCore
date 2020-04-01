import * as React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';

//This is an example of a stateless functional component.
//The reason you would want to use a functional component over a class component is:
//1. Easier to read and test.
//2. You end up with less code.
//3. Separating container and presentational components is a best practice. Presentational components don't need to set state.

const Reason = ({ title, description }) => (
    <Card>
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
        </CardBody>
    </Card>
)

export default Reason;