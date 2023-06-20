import React, { Component } from 'react';
import CarouselSlider from './CarouselSlider';
import OfficeBear from './OfficeBear';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <CarouselSlider /> 
                </div>
                <div>
                    <OfficeBear />
                </div>

            </div >
        );
    }
}

export default Home;