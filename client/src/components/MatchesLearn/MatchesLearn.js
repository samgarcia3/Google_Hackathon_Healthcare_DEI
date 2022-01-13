import React, { Component } from 'react';
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import MatchesInfo from "../MatchesInfo/MatchesInfo";
import "./MatchesLearn.scss";

export default class MatchesLearn extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    state = {
        overlay: false
    }

    onClick = () => {
        this.setState({ overlay: !this.state.overlay });
    }

    render() {
        const overlayClass = (this.state.overlay)?'overlay':'overlay--hide'
        return (
            <div>
                <div className={overlayClass}>
                    <div className='overlay__box'>
                        <h1 className='overlay__title'>Copay</h1>
                        <p className='overlay__text label'>Copay is how much you pay for an office visit with a doctor. Usually a flat amount: $20 or $30.</p>
                        <button className='overlay__button' onClick={this.onClick}>OK</button>
                    </div>
                </div>
                <TopNavBar title={this.props.match.params.id} menuIcon="back" />
                <MatchesInfo onClickHandler={this.onClick}/>
            </div>
        )
    }
}
