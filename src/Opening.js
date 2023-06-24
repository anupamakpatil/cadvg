import React, { Component } from 'react';
import './CarouselSlider.css';
import './OfficeBear.css';
import open1 from './images/open1.jpeg';
import open2 from './images/open2.jpeg';
import open3 from './images/open3.jpeg';
import open4 from './images/open4.jpeg';

class Opening extends Component {
    static defaultProps = {
        images: [open1, open2, open3, open4]
    };

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    componentDidMount() {
        this.startCarousel();
    }

    componentWillUnmount() {
        this.stopCarousel();
    }

    startCarousel = () => {
        this.carouselInterval = setInterval(this.nextSlide, 3000);
    };

    stopCarousel = () => {
        clearInterval(this.carouselInterval);
    };

    nextSlide = () => {
        const { currentIndex } = this.state;
        const { images } = this.props;

        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % images.length
        }));
    };

    render() {
        const { currentIndex } = this.state;
        const { images } = this.props;

        return (
            <div>
                <div className="banner">
                    <h2 className='heading'>Inaguration of Chartered Accountants Bhawana<br/>21 June, 2023</h2>
                </div>
                <div className="carousel-slider space">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className={index === currentIndex ? 'slide active' : 'slide'}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Opening;
