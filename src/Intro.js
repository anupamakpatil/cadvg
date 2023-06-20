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
                    <Link exact to="/"><h2>Welcome</h2></Link>
                </div>
            </div>
        );
    }
}

export default Intro;