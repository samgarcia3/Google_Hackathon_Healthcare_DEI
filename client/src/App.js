import { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OnbordingPage1 from './pages/Onbording/OnboardingPage1';
import MatchesPage from './pages/MatchesPage/MatchesPage';
import SurveyPage from "./pages/SurveyPage/SurveyPage";
import './App.scss';
class App extends Component {
    constructor() {
        super();
        this.state = {
            insurance: null,
            hospitals: null,
            user: null
        }
    }

    componentDidMount() {
        // axios.get('http://localhost:8080/insurance')
        //     .them(res => {
        //         this.setState({ insurance: res.data });
        //     });
        // axios.get('http://localhost:8080/hospitals')
        //     .them(res => {
        //         this.setState({ hospitalsance: res.data });
        //     });
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                <Switch>
                    <Route path='/' exact render={(renderProps) => <OnbordingPage1 {...renderProps} />}/>
                    <Route path="/survey" render={renderProps => <SurveyPage {...renderProps} />}/>
                    <Route path="/matches" render={(renderProps) => <MatchesPage {...renderProps} />} />
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
