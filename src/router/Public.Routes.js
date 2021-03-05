import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import HomeView from '../View/HomeView';
import AboutUsView from '../View/AboutUsView';
import PublicRoute from './HelperRoutes';

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/Home" component={HomeView} />
      <PublicRoute exact path="/AboutUs" component={AboutUsView} />
      <Redirect path="/" to="/Home" />
    </Switch>
  )
}

export default PublicRoutes;