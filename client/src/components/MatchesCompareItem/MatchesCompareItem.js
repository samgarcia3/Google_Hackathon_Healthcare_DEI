import React, { Component } from 'react';
import rightArrow from '../../assets/svg/right-chevron.svg';
import './MatchesCompareItem.scss';

class MatchesCompare extends Component {
    render() {
        const { image, match, name, plan, premium, deductible, coverage, notCovered } = this.props;
        return (
            <div className='matches-compare-item'>
                <div className='matches-compare-item__inner'>
                    <div className='matches-compare-item__outer' style={{width: match}}></div>
                </div>
                <h3 className='matches-compare-item__match'>{match} Match</h3>
                <div className='matches-compare-item__container'>
                    <img className="matches-compare-item__logo" src={image} alt='plan-icon' />
                    <div className='matches-compare-item__box'>
                        <h1 className='matches-compare-item__name'>{name}</h1>
                        <h3 className='matches-compare-item__label label'>{plan}</h3>
                    </div>
                    <img className='matches-compare-item__arrow' src={rightArrow} alt='right-arrow' />
                </div>
                <div className='matches-compare-item__text'>
                    <p>Monthly Premium: ${premium}</p>
                    <p>Deductible: ${deductible}</p>
                    <p>Coverage: {coverage.toString()}</p>
                    <p>Not Covered: {notCovered}</p>
                </div>

            </div>
        );
    }
}

export default MatchesCompare;