import React, { Component } from 'react';
import pp1 from './images/pp1.jpeg';
import pp2 from './images/pp2.jpeg';
import pp3 from './images/pp3.jpeg';
import pp4 from './images/pp4.jpeg';
import pp5 from './images/pp5.jpeg';
import pp6 from './images/pp6.jpeg';
import pp7 from './images/pp7.jpeg';
import pp8 from './images/pp8.jpeg';
import pp9 from './images/pp9.jpg';
import pp10 from './images/pp10.jpeg';
import pp11 from './images/pp11.jpeg';
import './Pastcard.css';

const images = [pp1, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11];

class Pastcard extends Component {
	render() {
		let ind = this.props.id-1;

		return (
			<div className="Pastcard">
				<h1 className="Pastcard-title">{this.props.name}</h1>
				<div className="Pastcard-image">
					<img src={images[ind]} alt={this.props.name} className='image-resize'/>
				</div>
				<div className="Pastcard-data">{this.props.exp}</div>
			</div>
		);
	}
}

export default Pastcard;