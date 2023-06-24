import React, { Component } from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import Home from './Home';
import Articles from './Articles';
import Events from './Events';
import CpeChapter from './CpeChapter';
import Past from './Past';
import UsefulLinks from './UsefulLinks';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import './Navigation.css';
import llogo from './images/llogo.ico';
import rlogo from './images/rlogo.ico';

class Navigation extends Component {
    render() {
        return (
            <div className='parent-component'>
                <nav className="navigation">
                    <div className="logo-left">
                        <img src={llogo} alt="Logo Left"  />
                    </div>
                    <ul>
                        <li><NavLink exact activeClassName='active-link' to="/">Home</NavLink></li>
                        <li><a href='https://www.icai.org/Members.html' target="_blank" rel="noopener noreferrer">Members</a></li>
                        <li><a href='https://www.icai.org/Students.html' target="_blank" rel="noopener noreferrer">Students</a></li>
                        <li><NavLink exact activeClassName='active-link' to="/articles">e-Journal</NavLink></li>
                        <li><NavLink exact activeClassName='active-link' to="/events">Events</NavLink></li>
                        <li><NavLink exact activeClassName='active-link' to="/cpe-chapter">CPE Chapter</NavLink></li>
                        <li><NavLink exact activeClassName='active-link' to="/history">History</NavLink></li>
                        <li><NavLink exact activeClassName='active-link' to="/useful-links">Useful Links</NavLink></li>
                    </ul>
                    <div className="logo-right">
                        <img src={rlogo} alt="Logo Right" />
                    </div>
                </nav>
                <div className="child-component">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/articles" element={<Articles />} />
                        <Route exact path="/events" element={<Events />} />
                        <Route exact path="/cpe-chapter" element={<CpeChapter />} />
                        <Route exact path="/history" element={<Past />} />
                        <Route exact path="/useful-links" element={<UsefulLinks />} />
                        <Route exact path="/articles/articleone" element={<Article1 />} />
                        <Route exact path="/articles/articletwo" element={<Article2 />} />
                        <Route exact path="/articles/articlethree" element={<Article3 />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

export default Navigation;