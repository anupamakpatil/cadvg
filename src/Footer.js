import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left">Contact us: caaddvg@gmail.com</div>
        <div className="footer-right">
          {/* <Link to="/motto" className="motto-link">ICAI Motto</Link> */}
          <a href="https://www.icai.org/post/icai-motto" target="_blank" rel="noopener noreferrer" className="motto-link">ICAI Motto</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
