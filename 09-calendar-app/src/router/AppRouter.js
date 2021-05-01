import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
/**
 * exact /login -LoginScreen
 * exact / -CalendarScreen
 */
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login">
                        <LoginScreen />
                    </Route>
                    <Route path="/">
                        <CalendarScreen />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};
