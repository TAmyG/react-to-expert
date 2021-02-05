import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route
                        exact
                        path="/auth/register"
                        component={RegisterScreen}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
            {/*Router... nova... switch
            path=/auth/login, component={login screen} no exact

            path=/auth/register, component={register screen} no exact

            redirect to=/auth/login

        */}
        </div>
    );
};
