import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true); //I have all
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Is logged

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return <h1>Wait...</h1>;
    }

    return (
        <Router>
            <div>
                {/*Router: path=/auth no es exact, componente={AuthRouter} */}
                {/*Main route, exact, path=/, component={JournalScreen} */}
                <Switch>
                    <PublicRoute
                        path="/auth"
                        isAuthenticated={isLoggedIn}
                        component={AuthRouter}
                    />
                    <PrivateRoute
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={JournalScreen}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};
