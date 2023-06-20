import React, { Component } from 'react';
import './CpeChapter.css';
import cpe from './images/cpe.jpeg';

class CpeChapter extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="banner">
                        <h2 className="heading">Davangere CPE Study Chapter of SIRC of ICAI</h2>
                    </div>
                    <div className="content">
                        <p className="paragraph">The knowledge needs to be updated at regular intervals to cope with dynamic changes, and to render apt services. The Institute of Chartered Accountants of India, New Delhi made it mandatory for every member in Practice as well as in employment to attend Continued Professional Education (CPE). CPE consists of structured and unstructured subjects. Year by year, the number of CPE hours has been increasing. Accordingly, the Davangere CPE Chapter of SIRC of ICAI was formed on 19-01-2004. The CPE chapter is headed by a Convenor and a Deputy Convenor. The CPE committee of the ICAI displays the topic to be dealt with in the seminar, and all the resource persons need to be approved by CPE Committee. One Day program is eligible for 6 hours of CPE Credit. We have conducted residential CPE programs in Chikkamagalur, Jindal – Thoranagallu. </p>
                        <p className="paragraph">From 1st April 2023, the Davangere CPE Study Chapter of SIRC of ICAI is formed for ease of the administration of chapters. Our chapter conducts 9 to 10 programs a year for the benefit of members and students. We are having credit for the most active CPE chapter in the state. We are covering almost all the new enactments, to keep abreast of the new topics in the society. Students are having direct interactions with our members which enables them to clear their doubts and develop their own modules tax planning models, accounting modules, etc. In the days to come, we are the vision to start coaching classes to CA students and expose broadly commerce fields. </p>
                    </div>
                    <div className="banner">
                        <h2 className="heading">Current CPE Study Chapter Team</h2>
                    </div>
                    <div>
                        <img src={cpe} alt="Picture of Convenor and Deputy Convenor" className='alter' />
                    </div>
                    <div className='content'>
                        <p className='paragraph'>The present CPE Convenor is CA N.G. Girish Nadig and Deputy Convenor is CA. D.V. Praveen. </p>
                    </div>
                </div>
                <div class="banner">
                    <h2>Upcoming Events!!</h2>
                    <p>Keep an eye to know the upcoming events.</p>
                </div>
            </div >
        );
    }
}

export default CpeChapter;