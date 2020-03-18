import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Users from './components/users/Users';
import Home from './components/home/Home';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/user">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;