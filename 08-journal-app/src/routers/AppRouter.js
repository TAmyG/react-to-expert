import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/*Router: path=/auth no es exact, componente={AuthRouter} */}
                {/*Main route, exact, path=/, component={JournalScreen} */}
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};
