import React, { Component } from 'react';
import MatchesTop from "../MatchesTop/MatchesTop";
import MatchesCompare from "../MatchesCompare/MatchesCompare";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import "./MatchesCoverage.scss";

class MatchesCoverage extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            whichRender: "top"
        }
    }

    toggleDisplay = () => {
        if (this.state.whichRender === "top") {
            this.setState({
                whichRender: "compare"
            })
        } else {
            this.setState({
                whichRender: "top"
            })
        }
    }

    render() {
        return (
            <div className="matches-main">
                <TopNavBar title="Matches" menuIcon="back" />
                <ul className="matches-main__menu">
                    <li className={this.state.whichRender === "top" ? "matches-main__item--active" : "matches-main__item"} onClick={this.toggleDisplay}>TOP OPTIONS</li>
                    <li className={this.state.whichRender === "compare" ? "matches-main__item--active" : "matches-main__item"} onClick={this.toggleDisplay}>COMPARE</li>
                </ul>
                {
                    this.state.whichRender === "top" ?
                    <MatchesTop redirectToShow={this.props.redirectToShow} /> :
                    <MatchesCompare redirectToShow={this.props.redirectToShow} />
                }
            </div>
        )
    }
}

export default MatchesCoverage;