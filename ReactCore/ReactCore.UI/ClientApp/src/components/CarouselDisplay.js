import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './CarouselDisplay.css';

const CarouselDisplay = (props) => {
    const history = useHistory();

    return (
        <Carousel>
            <Carousel.Item>
                <img src="./images/Flower.jpg" alt="First slide" />
                <Carousel.Caption>
                    <h3>Flower 1</h3>
                    <p>Flower 1</p>
                    <Button onClick={() => history.push("/About")}>Go to About Page</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="./images/Flower.jpg" alt="Third slide" />
                <Carousel.Caption>
                    <h3>Flower 2</h3>
                    <p>Flower 2</p>
                    <Button onClick={() => history.push("/About")}>Go to About Page</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="./images/Flower.jpg" alt="Third slide" />
                <Carousel.Caption>
                    <h3>Flower 3</h3>
                    <p>Flower 3</p>
                    <Button onClick={() => history.push("/About")}>Go to About Page</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselDisplay;