import React, { Component } from 'react';
import './Events.css';
import Opening from './Opening';
import timeline from './images/timeline.png';

class Events extends Component {

    render() {

        return (
            <div>
                <div className="road">
                    <img src={timeline} alt="timeline" className='road-image' />
                </div>
                <Opening />
            </div>
        );
    }
}

export default Events;
