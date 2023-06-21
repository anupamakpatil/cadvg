import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bg from './images/bg.png';
import './Intro.css';

class Intro extends Component {
    render() {
        return (
            <div className='intro-image'>
                <img src={bg} alt='background' />
                <div className='text-overlay'>
                    <Link exact to="/"><h2>Welcome to the website of DCAA</h2></Link>
                    <h2>www.cadvg.in</h2>
                </div>
            </div>
        );
    }
}

export default Intro;