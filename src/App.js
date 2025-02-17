import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContestantProfile from './components/ContestantProfile';
import VotingSystem from './components/VotingSystem';
import LiveStream from './components/LiveStream';
import SeasonArchive from './components/SeasonArchive';
import NewsUpdates from './components/NewsUpdates';
import ErrorBoundary from './components/ErrorBoundary';
import AdminPanel from './admin/AdminPanel';

const App = () => {
    return (
        <Router>
            <ErrorBoundary>
                <Switch>
                    <Route path="/contestant/:id" component={ContestantProfile} />
                    <Route path="/vote" component={VotingSystem} />
                    <Route path="/live" component={LiveStream} />
                    <Route path="/archive" component={SeasonArchive} />
                    <Route path="/news" component={NewsUpdates} />
                    <Route path="/admin" component={AdminPanel} />
                    <Route path="/" exact component={() => <div>Welcome to Fame Forge</div>} />
                </Switch>
            </ErrorBoundary>
        </Router>
    );
};

export default App;
