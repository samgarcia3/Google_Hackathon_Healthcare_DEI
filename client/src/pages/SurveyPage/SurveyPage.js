import React, { Component } from 'react'
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import Survey1 from "../../components/Survey1/Survey1";
import Surver2 from "../../components/Survey2/Survey2";
import "./SurveyPage.scss";


export default class SurveyPage extends Component {
    state = {
        whichPage: 1
    }

    goTo = (path) => {
        this.props.history.push(path)
    }

    prevSurvey = () => {
        this.setState({
            whichPage: 1
        })
    }

    nextSurvey = () => {
        this.setState({
            whichPage: 2
        })
    }

    render() {
        return (
            <div className="survey-page">
                <TopNavBar title="Insurance Analysis" menuIcon="back" />
                {
                    this.state.whichPage === 1 ?
                    <Survey1 prevPage={this.goTo} nextPage={this.nextSurvey} /> :
                    <Surver2 prevPage={this.prevSurvey} nextPage={this.goTo}  />
                }
            </div>
        )
    }
}