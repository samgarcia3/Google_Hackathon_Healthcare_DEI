import React, { Component } from 'react';
import axios from "axios";
import { Switch, Route } from 'react-router-dom';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import MatchesCoverage from "../../components/MatchesCoverage/MatchesCoverage";
import MatchesLearn from "../../components/MatchesLearn/MatchesLearn";
import "./MatchesPage.scss";


export default class MatchesPage extends Component {
    // state = {
    //     insuranceList: []
    // }

    // componentDidMount() {
    //     axios
    //         .get("htp://localhost:8080/insurance")
    //         .then(response => {
    //             this.setState({
    //                 insuranceList: response.data
    //             })
    //         })
    // }

    redirectToInsurance = (id) => {
        this.props.history.push(`/matches/learn/${id}`);
    }

    render() {
        // if (!!this.state.insuranceList) { return <>Loading...</>}
        return (
            <div className="matches-page">
                <Switch>
                    <Route path="/matches/coverage" exact render={renderProps => <MatchesCoverage redirectToShow={this.redirectToInsurance} {...renderProps} />} />
                    <Route path="/matches/learn/:id" render={renderProps => <MatchesLearn {...renderProps} />} />
                </Switch>
                <BottomMenu />
            </div>
        )
    }
}
