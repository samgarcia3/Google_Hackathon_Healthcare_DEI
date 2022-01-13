import React, { Component } from 'react';
import rightArrow from '../../assets/svg/right-chevron.svg';
import './MatchesTopItem.scss';

class MatchesTop extends Component {
  render() {
    const { name, match, image } = this.props;
    return (
      <div className="matches-top-item">
        <img className="matches-top-item__logo" src={image} alt='plan-icon' />
        <div className="matches-top-item__container">
          <div className="matches-top-item__box">
            <h1 className='matches-top-item__name'>{name}</h1>
            <img className="matches-top-item__arrow" src={rightArrow} alt='right-arrow' />
          </div>
          <h3 className='matches-top-item__label label'>{match} match</h3>
        </div>

      </div>
    );
  }
}

export default MatchesTop;