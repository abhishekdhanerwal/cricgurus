import React, { useState, useEffect } from 'react';

import LandingPage from './containers/LandingPage/LandingPage';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';


function App(props) {

    let routes = (
        <Switch>
            <Route path="/home" exact component={LandingPage} />
            <Redirect to="/home" />
        </Switch>
    );

    return (
        <React.Fragment>
            {routes}
        </React.Fragment>
    );
}


export default App;
