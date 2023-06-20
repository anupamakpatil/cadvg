import React, { Component } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import './Articles.css';
import j1 from './images/j1.jpeg';
import j2 from './images/j2.jpg';
import j3 from './images/j3.jpg';

class Articles extends Component {
    render() {
        return (
            <div>
                <div className='Articles'>

                    <Link exact to="/articles/articleone" className="link-div">
                        <div className='journal-card'>
                            <div className='child'>
                                <img src={j1} alt='image' className='jimage-container jalter-image' />
                            </div>
                            <div className='content child'>
                                <p className='jparagraph'>EQUITY AND MUTUAL FUNDS</p>
                                <p className='jparagraph'>- CA Kiran L Patil </p>
                            </div>
                        </div>
                    </Link>

                    <Link exact to="/articles/articletwo" className="link-div">
                        <div className='journal-card'>
                            <div className='child'>
                                <img src={j2} alt='image' className='jimage-container jalter-image' />
                            </div>
                            <div className='content child'>
                                <p className='jparagraph'>THE INDIAN CONTRACT ACT, 1872</p>
                                <p className='jparagraph'>- Sandhya G N, CA Student </p>
                            </div>
                        </div>
                    </Link>

                    <Link exact to="/articles/articlethree" className="link-div">
                        <div className='journal-card'>
                            <div className='child'>
                                <img src={j3} alt='image' className='jimage-container jalter-image' />
                            </div>
                            <div className='content child'>
                                <p className='jparagraph'>FRAUD AND RESPONSIBILITY OF THE AUDITOR AND REPORTING OF FRAUD</p>
                                <p className='jparagraph'>- Akshatha, CA Final Student </p>
                            </div>
                        </div>
                    </Link>

                </div>
                <div>
                    {/* <Routes>
                        <Route exact path="/articles/articleone" element={<Article1 />} />
                        <Route exact path="/articles/articletwo" element={<Article2 />} />
                        <Route exact path="/articles/articlethree" element={<Article3 />} />
                    </Routes> */}
                </div>

            </div>
        );
    }
}

export default Articles;