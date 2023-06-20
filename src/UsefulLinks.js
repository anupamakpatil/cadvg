import React, { Component } from 'react';
import './UsefulLinks.css';

class UsefulLinks extends Component {
    render() {
        return (
            <div className='set-center'>
                <div className='useful-links'>
                    <h2>Here are some Useful Links to refer</h2> <br/>

                    <div className='container'>
                        <a className="button-link" href="https://www.incometax.gov.in/iec/foportal/" target="_blank" rel="noopener noreferrer">
                            Income Tax Web Portal</a>
                    </div>

                    <div className='container'>
                        <a className="button-link" href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">
                            GST Web Portal</a>
                    </div>


                    <div className='container'>
                        <a className="button-link" href="https://www.icai.org/" target="_blank" rel="noopener noreferrer">
                            ICAI Website</a>
                    </div>

                    <div className='container'>
                        <a className="button-link" href="https://boslive.icai.org/index.php" target="_blank" rel="noopener noreferrer">
                            BoS Portal</a>
                    </div>

                    <div className='container'>
                        <a className="button-link" href="https://icaiexam.icai.org/" target="_blank" rel="noopener noreferrer">
                            Examination Portal</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default UsefulLinks;
