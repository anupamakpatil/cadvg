import React, { Component } from 'react';
import './Events.css';
import timeline from './images/timeline.png';

class Events extends Component {

    render() {

        return (
            <div className="road">
                <img src={timeline} alt="timeline" />
            </div>
        );
    }
}

export default Events;