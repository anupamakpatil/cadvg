import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIcon: null,
    };
  }

  handleIconClick = (icon) => {
    this.setState({ selectedIcon: icon });
  };

  render() {
    const { selectedIcon } = this.state;

    return (
      <div className="road">
        <div className="icons">
          <div className={`icon ${selectedIcon === 'icon1' ? 'active' : ''}`} onClick={() => this.handleIconClick('icon1')}>
            <img src="icon1.png" alt="Icon 1" />
            <span>Icon 1</span>
          </div>
          <div className={`icon ${selectedIcon === 'icon2' ? 'active' : ''}`} onClick={() => this.handleIconClick('icon2')}>
            <img src="icon2.png" alt="Icon 2" />
            <span>Icon 2</span>
          </div>
          <div className={`icon ${selectedIcon === 'icon3' ? 'active' : ''}`} onClick={() => this.handleIconClick('icon3')}>
            <img src="icon3.png" alt="Icon 3" />
            <span>Icon 3</span>
          </div>
        </div>
        <div className="text-box">
          {selectedIcon && (
            <div>
              <h3>{selectedIcon}</h3>
              <p>Information about {selectedIcon}</p>
            </div>
          )}
        </div>
        <div className="work-in-progress">Work in Progress</div>
      </div>
    );
  }
}

export default Events;
