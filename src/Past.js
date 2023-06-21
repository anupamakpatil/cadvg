import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pastcard from './Pastcard';
import './Past.css';

class Past extends Component {
    static defaultProps = {
        president: [
            { id: 1, name: 'CA Y Y Amberker', base_experience: '1986 - 1991' },
            { id: 2, name: 'CA A S Veeranna', base_experience: '1991 - 1994' },
            { id: 3, name: 'CA Virupanna Amberker', base_experience: '1994 - 1997' },
            { id: 4, name: 'CA A Kirankumar', base_experience: '1997 - 2000, 2010 - 2011' },
            { id: 5, name: 'CA Basavaraj G Wodeyar', base_experience: '2000 - 2001, 2008 - 2010, 2013 - 2015' },
            { id: 6, name: 'CA B N Vijaykumar', base_experience: '2001 - 2003' },
            { id: 7, name: 'CA Vinayaka D Joshi', base_experience: '2003 - 2004' },
            { id: 8, name: 'CA N G Girish Nadig', base_experience: '2004 - 2007' },
            { id: 9, name: 'CA Shrinivas Mahendrakar', base_experience: '2007 - 2008' },
            { id: 10, name: 'CA Mahesh G Shendge', base_experience: '2011 - 2013' },
            { id: 11, name: 'CA Kiran L Patil', base_experience: '2015 - present' }
        ]
    };
    render() {
        return (
            <div className='Past'>
                <div className="row">
                    <h1 className='banner-heading'>History of DCAA</h1>
                </div>
                <div className="container">
                    <div className="content">
                        <p className='paragraph'>Davangere Chartered Accountants Association was formally registered during 1987-88 with the main object of enriching the knowledge of members, encouraging pleasant sentiment and harmony amongst members, and to conduct seminars and conferences for the benefit of members and the public at large."Gyanam Sarvatra Sadhanam" which means “Knowledge is the means to accomplish everything” and is the dictum of the Davangere CA Association.</p>
                        <p className='paragraph'>On September 23, 2006, we made "SANKALPA<Link exact to="/intro" className='deco'>,</Link>" the resolute decision to construct our building. Finally, on June 21, 2023, our vision became a reality, symbolized by the accomplishment, or "SIDDHI," of our CA Bhawan. The time between intention and accomplishment is inconsequential once dreams materialize into truth.</p>
                    </div>
                </div>
                <div className="row">
                    <h1 className='banner-heading'>Past Presidents</h1>
                </div>
                <div className="Past-cards">
                    {this.props.president.map((p) => (<Pastcard id={p.id} name={p.name} exp={p.base_experience} />))}
                </div>
            </div>
        );
    }
}

export default Past;

//render this for history part for the cards