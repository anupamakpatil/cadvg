import React, { Component } from 'react';
import './CarouselSlider.css';
import sc1 from './images/sc1.jpg';
import sc2 from './images/sc2.jpg';
import sc3 from './images/sc3.jpg';
import sc4 from './images/sc4.jpg';
import sc5 from './images/sc5.jpg';

class CarouselSlider extends Component {
  static defaultProps = {
    images: [sc1, sc2, sc3, sc4, sc5]
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
      <div className="carousel-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentIndex ? 'slide active' : 'slide'}
          />
        ))}
      </div>
    );
  }
}

export default CarouselSlider;
