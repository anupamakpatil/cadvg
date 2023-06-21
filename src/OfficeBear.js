import React, { Component } from 'react';
import './OfficeBear.css';
import prespre from './images/prespre.jpeg';
import pressec from './images/pressec.jpeg';
import exec from './images/exec.jpeg';

class OfficeBear extends Component {
    render() {
        return (
            <div>
                <div class="banner">
                    <div class="border"> </div>
                    <h2 className='heading'>Current Office Bearers</h2>
                    <div class="border border-bottom"> </div>
                </div>
                <div className='card-row'>
                    <div className="office-card">
                        <h1 className="officecard-title">President</h1>
                        <div className="officecard-image">
                            <img src={prespre} alt="present president" className='image-resize' />
                        </div>
                        <div className="officecard-data">CA Kiran L Patil</div>
                    </div>
                    <div className="office-card">
                        <h1 className="officecard-title">Secretary</h1>
                        <div className="officecard-image">
                            <img src={pressec} alt="present president" className='image-resize' />
                        </div>
                        <div className="officecard-data">CA Umesh Shetty</div>
                    </div>
                </div>
                <div className="banner">
                    <h2 className="heading">Current Executive Committee and Office Bearers</h2> <br />
                    <div className='disp'>
                        <div className='child'>
                            <img src={exec} alt='exec committe picture' className='alter-image' />
                        </div>
                        <div className='content child'>
                            <p className='paragraph'>Honarary President: CA A S Veeranna </p>
                            <p className='paragraph'>President: CA Kiran L Patil </p>
                            <p className='paragraph'>Vice President: CA Madhuprasad </p>
                            <p className='paragraph'>Secretary: CA Umesh Shetty </p>
                            <p className='paragraph'>Joint Secretary: CA Omkar </p>
                            <p className='paragraph'>Treasurer: CA Lingaraj S </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default OfficeBear;