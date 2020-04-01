import * as React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';

const Reason = ({ title, description }) => (
    <Card>
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
        </CardBody>
    </Card>
)

export default Reason;